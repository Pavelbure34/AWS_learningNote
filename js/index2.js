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

const lesson={
    day01:()=>{
        $("#mainArticle").html(pages.day01);
    },
    day02:()=>{
        $("#mainArticle").html(pages.day02);
    },
    day03:()=>{
        $("#mainArticle").html(pages.day03);
    },
};

const quizes = {
    day01:()=>{
        $("#mainArticle").html(quiz.day01);
        $("#check").click(()=>{
            if ($("#qq1").html() === 'Available Area' &&
                $("#true").checked === true)
                return alert("Good job!");
            else   
                return alert("Do it again!"); 
        });
        $("#clr").click(()=>{
            $("#qq1").html("");
            $("#true").checked = false;
            $("#false").checked = false;
        });
    }

}
