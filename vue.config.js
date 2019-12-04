const list = [
    {
        title: '我的同桌',
        content: "作业做完没"
    }, {
        title: "冀波",
        content: "同桌"
    }, {
        title: "小胖子",
        content: "白胖"
    }
]
module.exports={
    devServer:{
        before(app){
            app.get('/getlist',(req,res)=>{
                res.send({
                    code:200,
                    data:list,
                    messege:'列表'
                })
            })
        }
    }
}