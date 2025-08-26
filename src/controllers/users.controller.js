export const getUsers  = (req,res)=>{
    res.send(
        [
            { id: 1, name: "Jhovana" },
            { id: 2, name: "Juan" },
            { id: 3, name: "Karla" }
        ]
    )
}