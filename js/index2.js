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
    day04:()=>{
        $("#mainArticle").html(pages.day04);
    },
    day05:()=>{
        $("#mainArticle").html(pages.day05);
    },
    day06:()=>{
        $("#mainArticle").html(pages.day06);
    },
    day07:()=>{
        $("#mainArticle").html(pages.day07);
    },
    day08:()=>{
        $("#mainArticle").html(pages.day08);
    },
    day09:()=>{
        $("#mainArticle").html(pages.day09);
    },
    day10:()=>{
        $("#mainArticle").html(pages.day10);
    },
    day11:()=>{
        $("#mainArticle").html(pages.day11);
    },
    day12:()=>{
        $("#mainArticle").html(pages.day12);
    }
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
