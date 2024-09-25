const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const MONGO_URL = "mongodb://127.0.0.1:27017/travelTour";

// main().then(() => {
//     console.log("Connected to Database");
// }).catch((err) => {
//     console.log(err);
// });
// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

const imageSchema = new Schema({
        imagePath: [String]
});

const Image = mongoose.model("Image", imageSchema);

const images = new Image({
        imagePath: [
            "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
            "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
            "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60",
            "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1568849676085-51415703900f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://plus.unsplash.com/premium_photo-1664368832444-466464d54df3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1487622750296-6360190669a1?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1471018238625-87ca40f13b31?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1523568129082-a8d6c095638e?q=80&w=994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            " https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1532186651327-6ac23687d189?q=80&w=1049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1531778272849-d1dd22444c06?q=80&w=1060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1628671708594-b8e9358dc5bf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1559305289-4c31700ba9cb?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1590053404184-ce4ee04f3d58?q=80&w=1108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1489914169085-9b54fdd8f2a2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?q=80&w=1005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1465311440653-ba9b1d9b0f5b?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1463693396721-8ca0cfa2b3b5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1465188466731-618dfc07a57d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1502126324834-38f8e02d7160?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1483666852720-824ca74c50ca?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1587502537147-2ba64a62e3d3?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1683009427037-c5afc2b8134d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1465188035480-cf3a60801ea5?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1496060169243-453fde45943b?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            ,
            "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=60"
            
        ]
    });

    // images.save().then(()=> console.log("saved"))
    // .catch(err => console.log("error", err));

module.exports = Image;
    