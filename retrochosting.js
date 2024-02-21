// important note for version 1: i do believe the logic here means that multiple instances of the same id will rewrite them all to the same thing. need to get by class???

document.body.style.border = "5px solid green";     //just to let me know the code is working at all during the testing phase

let allPosts = document.getElementsByClassName("co-themed-box co-post-box");
if (allPosts.length > 2) { document.body.style.border = "10px solid red"; }
for (let i = 0; i < allPosts.length; i++)
{
    let subPosts = allPosts[i].getElementsByClassName("my-4");
    let topTimeStamp = allPosts[i].getElementsByTagName("time");
    for (let j = 0; j < subPosts.length; j++)
    {
        if (subPosts[j].getElementsByTagName("time") !== undefined && subPosts[j].getElementsByTagName("time") !== null) {
            let userTimeStamp = subPosts[j].getElementsByTagName("time");
            if (userTimeStamp.length > 0) {
                if (userTimeStamp[0].querySelector("a") !== undefined && userTimeStamp[0].querySelector("a") !== null)
                {
                    userTimeStamp[0].querySelector("a").classList.add("hover:underline");
                }
                topTimeStamp[0].innerHTML = userTimeStamp[0].innerHTML;
                userTimeStamp[0].style.display = "none";
            }
        }
    }
  
}

if (allPosts.length > 2) { document.body.style.border = "5px solid blue"; }

/* EXAMPLE HTML added to end of post. Used with permission.
<p style="color:grey" name="crosspost test"><small><small>
<time  datetime="2024-02-21T02:37:00.000Z" title="Posted Feb 20, 2024 - 8:37 PM CST"><a target="_blank" rel="noopener" href="https://www.tumblr.com/whimsical-catacombs/742905950764154880" role="link" class="MHZ5s ZlHiL BSUG4" tabindex="0">Feb 20, 2024 - 8:37 PM CST</time></time></a>
</small></small></p>
*/
