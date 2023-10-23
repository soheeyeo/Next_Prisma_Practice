import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

function setTitle(code: string) {
    return code.trim().split("\n")[0].replace("// ", "");
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case "POST":
            const { language, code } = req.body;
            const title = setTitle(code);
            const post = await prisma.post.create({
                data: {
                    title,
                    language,
                    code,
                },
            });
            res.status(201).json(post);
            break;
        default:
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}

export default handler;
