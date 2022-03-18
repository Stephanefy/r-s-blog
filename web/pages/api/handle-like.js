import client from '../../client';


client.config({
    token: process.env.SANITY_WRITE_TOKEN
})


export default async (req, res) => {

    const { _id } = JSON.parse(req.body);
    const data = await client.patch(_id).inc({ likes: 1}).commit();

    res.statusCode = 200
    res.json({likes: data.likes})
}