import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateblogInput } from "@swastikpratik/blog-common";
import { Hono } from "hono";
import { verify } from 'hono/jwt';  


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    },
    Variables: {
        userId: string;
    }
}>();
  

// middleware
blogRouter.use('/', async (c, next) => {
    console.log("here");
    
    const header = c.req.header("authorization") || "";
    try {
        const user = await verify(header, c.env.JWT_SECRET);
        if (user) {
            //@ts-ignore
            c.set('userId', user.id);
            await next();
        }
        else {
            c.status(403)
            return c.json({
                error : "unauthorized"  
            })
        }   
    } catch (error) {
        c.status(403)
        return c.json({
            error : "You are no logged in"   
        })
    }
})
  

blogRouter.post('/', async (c) => {


    const authorId = c.get("userId");
    const body = await c.req.json();

    const { success } = createBlogInput.safeParse(body);

    if (!success) {
        c.status(411);
        return c.json({
        message : "Input format is not correct"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId : authorId
        }
    })

    return c.json({
        id: blog.id
    })
})

blogRouter.get("/bulk", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const posts = await prisma.post.findMany({});

    return c.json(posts);
})

blogRouter.get('/:id', async (c) => {
    const id = c.req.param('id');
    console.log(id);
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blog = await prisma.post.findUnique({
            where: {
                id
            },
        })
        return c.json({
            blog
        })
    } catch (error) {
        c.status(411);
        return c.json({
            message: "Error while fetching blog post"
        });
    }
})



blogRouter.put('/', async (c) => {
    
    const body = await c.req.json();
    const { success } = updateblogInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.json({
      message : "Input format is not correct"
    })
  }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())


    const blog = await prisma.post.update({
        where: {
            id : body.id
        },
        data: {
            title: body.title,
            content: body.content,
        }
    })

    return c.json({
        id: blog.id,
        message : "updated!"
    })
})

// add pagination-->

