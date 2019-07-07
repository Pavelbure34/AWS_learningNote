$(document).ready(
    ()=>{
        funcs.imageWithSub(
            "computeModel",
            "center",
            "./image/day01/cloudComputeModel.png",
            500,
            300,
            "Cloud Computing Variations"
        )
    }
)

const nav={
    orientation:()=>{
        $("#mainArticle").html(pages.orientation);
    },
    day01:()=>{
        let photo = [
            "./image/day01/storageExample.png",
            "./image/day01/hybridStorage.png"
        ];
        let text = [
            "General Example",
            "Hybrid Storage" 
        ];
        $("#mainArticle").html(pages.day01);
        funcs.photoAlbum(
            "imgs",
            "album",
            "center",
            photo,
            "prevButton","nxtButton",
            600,300,
            text,
            2
        );
    },
    day02:()=>{
        let imgs1 = [
            './image/day02/imgs1_1.png',
            './image/day02/imgs1_2.png'
        ];
        let text1 = [
            'click service',
            'create bucket'
        ];
        let imgs2 = [
            './image/day02/imgs2_1.png',
            './image/day02/imgs2_2.png'
        ];
        let text2 = [
            'bucket name',
            'click and create bucket'
        ];
        let imgs3 = [
            './image/day02/imgs3_2.png',
            './image/day02/imgs3_1.png'
        ];
        let text3 = [
            'upload file',
            'file uploaded'
        ];
        let imgs4 = [
            './image/day02/imgs4_1.png',
            './image/day02/imgs4_2.png',
            './image/day02/imgs4_3.png'
        ];
        let text4 = [
            'click file',
            'download it',
            'downloaded'
        ];
        let imgs5 = [
            './image/day02/imgs5_1.png',
            './image/day02/imgs5_2.png'
        ];
        let text5 = [
            'emptying the bucket',
            'bucket deleted'
        ];
        $("#mainArticle").html(pages.day02);
        funcs.photoAlbum(
            "imgs1",
            "album1",
            "center",
            imgs1,
            "prev1","nxt1",
            700,400,
            text1,
            2
        );
        funcs.photoAlbum(
            "imgs2",
            "album2",
            "center",
            imgs2,
            "prev2","nxt2",
            700,400,
            text2,
            2
        );
        funcs.photoAlbum(
            "imgs3",
            "album3",
            "center",
            imgs3,
            "prev3","nxt3",
            700,400,
            text3,
            2
        );
        funcs.photoAlbum(
            "imgs4",
            "album4",
            "center",
            imgs4,
            "prev4","nxt4",
            700,400,
            text4,
            3
        );
        funcs.photoAlbum(
            "imgs5",
            "album5",
            "center",
            imgs5,
            "prev5","nxt5",
            700,400,
            text5,
            2
        );
    },
    day03:()=>{
        $("#mainArticle").html(pages.day03);
        funcs.imageWithSub(
            "img1",
            "center",
            "./image/day03/dataExp.png",
            500,300,
            "Example"
        );
    },
    day04:()=>{
        $("#mainArticle").html(pages.day04);
    },
    day05:()=>{
        $("#mainArticle").html(pages.day05);
    },
    day06:()=>{
        $("#mainArticle").html(pages.day06);
    }
}
