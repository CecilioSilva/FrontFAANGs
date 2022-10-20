const createPost = (post_data) => {
    let post = document.createElement("article");
    post.id = "post";

    let post_header = document.createElement("div");
    post_header.id = "post-header";

    let post_personal = document.createElement("div");
    post_personal.id = "post-personal";

    let post_link = document.createElement("a");
    post_link.href = "#";

    let post_profile_picture = document.createElement("img");
    post_profile_picture.src = post_data.profile_picture;
    post_profile_picture.alt = "post-profile-picture";
    post_profile_picture.id = "post-profile-picture";
    post_link.appendChild(post_profile_picture);

    let post_author_date = document.createElement("div");
    post_author_date.id = "post-author-date";

    let post_autor_link = document.createElement("a");
    post_autor_link.href = "#";

    let post_author = document.createElement("div");
    post_author.id = "post-author";
    post_author.innerText = post_data.author;
    post_autor_link.appendChild(post_author);
    post_author_date.appendChild(post_autor_link);

    let date_visib = document.createElement("div");
    date_visib.id = "date-visib";

    let post_date = document.createElement("a");
    post_date.id = "post-date";
    post_date.href = "#";
    post_date.innerText = `${post_data.date} ·`;
    date_visib.appendChild(post_date);

    let post_visibility = document.createElement("span");
    post_visibility.id = "post-visibility";

    let post_public = document.createElement("img");
    post_public.alt = "public-visibility";
    post_public.src = post_data.visibility;
    post_visibility.appendChild(post_public);

    date_visib.appendChild(post_visibility);
    post_author_date.appendChild(date_visib);
    post_personal.appendChild(post_link);
    post_personal.appendChild(post_author_date);

    let post_options = document.createElement("button");
    post_options.id = "post-options";

    let post_option_icon = document.createElement("img");
    post_option_icon.src = "../images/fakebook/posts/see-more.svg";
    post_option_icon.alt = "see more";
    post_options.appendChild(post_option_icon);

    post_header.appendChild(post_personal);
    post_header.appendChild(post_options);

    let post_content = document.createElement("div");
    post_content.id = "post-content";

    let post_content_image = document.createElement("img");
    post_content_image.src = post_data.image;
    post_content_image.alt = "post-image";
    post_content_image.id = "post-content-image";
    post_content.appendChild(post_content_image);

    let post_stats = document.createElement("div");
    post_stats.id = "post-stats";

    let reaction_items = document.createElement("div");
    reaction_items.id = "reaction-items";

    let like_count = document.createElement("img");
    like_count.id = "reaction-item";
    like_count.src = "../images/fakebook/posts/like.svg";
    like_count.alt = "Like count";
    reaction_items.appendChild(like_count);

    let love_count = document.createElement("img");
    love_count.id = "reaction-item";
    love_count.src = "../images/fakebook/posts/love.svg";
    love_count.alt = "Love count";
    reaction_items.appendChild(love_count);

    let reaction_count_link = document.createElement("a");
    reaction_count_link.href = "#";

    let reaction_count = document.createElement("span");
    reaction_count.id = "reaction-count";
    reaction_count.innerText = post_data.reaction_count;
    reaction_count_link.appendChild(reaction_count);
    reaction_items.appendChild(reaction_count_link);
    post_stats.appendChild(reaction_items);

    let interaction_items = document.createElement("div");
    interaction_items.id = "interaction-items";

    let interaction_comment_link = document.createElement("a");
    interaction_comment_link.href = "#";
    let comment_stats = document.createElement("span");
    comment_stats.id = "comment-stats";
    comment_stats.innerText = `${post_data.comment_count} Comments`;
    interaction_comment_link.appendChild(comment_stats);
    interaction_items.appendChild(interaction_comment_link);

    let interaction_share_link = document.createElement("a");
    interaction_share_link.href = "#";
    let share_stats = document.createElement("span");
    share_stats.id = "share-stats";
    share_stats.innerText = `${post_data.share_count} Shares`;
    interaction_share_link.appendChild(share_stats);
    interaction_items.appendChild(interaction_share_link);
    post_stats.appendChild(interaction_items);

    let post_iteraction = document.createElement("div");
    post_iteraction.id = "post-interaction";

    let post_iteractions = document.createElement("ul");
    post_iteractions.id = "post-interactions";

    let post_like_button = document.createElement("li");
    post_like_button.id = "post-button";
    let like_image = document.createElement("img");
    like_image.src = "../images/fakebook/posts/LikePost.png";
    like_image.alt = "Like";
    like_image.id = "post-button-icon";
    let like_text = document.createElement("span");
    like_text.id = "post-button-text";
    like_text.innerText = "Like";
    post_like_button.appendChild(like_image);
    post_like_button.appendChild(like_text);
    post_iteractions.appendChild(post_like_button);

    let post_comment_button = document.createElement("li");
    post_comment_button.id = "post-button";
    let comment_image = document.createElement("img");
    comment_image.src = "../images/fakebook/posts/CommentPost.png";
    comment_image.alt = "Comment";
    comment_image.id = "post-button-icon";
    let comment_text = document.createElement("span");
    comment_text.id = "post-button-text";
    comment_text.innerText = "Comment";
    post_comment_button.appendChild(comment_image);
    post_comment_button.appendChild(comment_text);
    post_iteractions.appendChild(post_comment_button);

    let post_share_button = document.createElement("li");
    post_share_button.id = "post-button";
    let share_image = document.createElement("img");
    share_image.src = "../images/fakebook/posts/SharePost.png";
    share_image.alt = "Share";
    share_image.id = "post-button-icon";
    let share_text = document.createElement("span");
    share_text.id = "post-button-text";
    share_text.innerText = "Share";
    post_share_button.appendChild(share_image);
    post_share_button.appendChild(share_text);
    post_iteractions.appendChild(post_share_button);

    post_iteraction.appendChild(post_iteractions);

    post.appendChild(post_header);
    post.appendChild(post_content);
    post.appendChild(post_stats);
    post.appendChild(post_iteraction);

    let post_container = document.querySelector("#posts-container");
    post_container.appendChild(post);
};

posts = [
    {
        author: "Vanessa Hansen",
        date: "September 26",
        profile_picture: "../images/fakebook/profile.png",
        visibility: "../images/fakebook/posts/public.svg",
        reaction_count: "69K",
        comment_count: "3K",
        share_count: "943",
        image: "../images/fakebook/posts/content/post-01.jpg",
    },
    {
        author: "Tom Patel",
        date: "April 10",
        profile_picture: "../images/fakebook/profile.png",
        visibility: "../images/fakebook/posts/public.svg",
        reaction_count: "85K",
        comment_count: "3K",
        share_count: "474",
        image: "../images/fakebook/posts/content/post-02.jpg",
    },
    {
        author: "Sharon Adams",
        date: "January 11",
        profile_picture: "../images/fakebook/profile.png",
        visibility: "../images/fakebook/posts/public.svg",
        reaction_count: "94K",
        comment_count: "7K",
        share_count: "746",
        image: "../images/fakebook/posts/content/post-03.jpg",
    },
    {
        author: "Rebecca Davis",
        date: "July 1",
        profile_picture: "../images/fakebook/profile.png",
        visibility: "../images/fakebook/posts/public.svg",
        reaction_count: "75K",
        comment_count: "6K",
        share_count: "952",
        image: "../images/fakebook/posts/content/post-04.jpg",
    },
    {
        author: "Jeanne Hicks",
        date: "February 28",
        profile_picture: "../images/fakebook/profile.png",
        visibility: "../images/fakebook/posts/public.svg",
        reaction_count: "85K",
        comment_count: "10K",
        share_count: "196",
        image: "../images/fakebook/posts/content/post-05.jpg",
    },
    {
        author: "Renee Hughes",
        date: "February 7",
        profile_picture: "../images/fakebook/profile.png",
        visibility: "../images/fakebook/posts/public.svg",
        reaction_count: "1K",
        comment_count: "9K",
        share_count: "337",
        image: "../images/fakebook/posts/content/post-06.jpg",
    },
    {
        author: "Bobby Dunn",
        date: "February 24",
        profile_picture: "../images/fakebook/profile.png",
        visibility: "../images/fakebook/posts/public.svg",
        reaction_count: "54K",
        comment_count: "3K",
        share_count: "854",
        image: "../images/fakebook/posts/content/post-07.jpg",
    },
    {
        author: "Jeffrey Thomas",
        date: "October 20",
        profile_picture: "../images/fakebook/profile.png",
        visibility: "../images/fakebook/posts/public.svg",
        reaction_count: "33K",
        comment_count: "2K",
        share_count: "764",
        image: "../images/fakebook/posts/content/post-08.jpg",
    },
    {
        author: "Blake Brock",
        date: "August 24",
        profile_picture: "../images/fakebook/profile.png",
        visibility: "../images/fakebook/posts/public.svg",
        reaction_count: "79K",
        comment_count: "1K",
        share_count: "374",
        image: "../images/fakebook/posts/content/post-09.jpg",
    },
    {
        author: "Joseph Berger",
        date: "December 1",
        profile_picture: "../images/fakebook/profile.png",
        visibility: "../images/fakebook/posts/public.svg",
        reaction_count: "42K",
        comment_count: "5K",
        share_count: "332",
        image: "../images/fakebook/posts/content/post-10.jpg",
    },
    {
        author: "Carl Deleon",
        date: "June 13",
        profile_picture: "../images/fakebook/profile.png",
        visibility: "../images/fakebook/posts/public.svg",
        reaction_count: "10K",
        comment_count: "1K",
        share_count: "415",
        image: "../images/fakebook/posts/content/post-11.jpg",
    },
    {
        author: "Kimberly Henderson",
        date: "April 2",
        profile_picture: "../images/fakebook/profile.png",
        visibility: "../images/fakebook/posts/public.svg",
        reaction_count: "72K",
        comment_count: "6K",
        share_count: "230",
        image: "../images/fakebook/posts/content/post-12.jpg",
    },
    {
        author: "Mark Morris",
        date: "November 20",
        profile_picture: "../images/fakebook/profile.png",
        visibility: "../images/fakebook/posts/public.svg",
        reaction_count: "25K",
        comment_count: "2K",
        share_count: "719",
        image: "../images/fakebook/posts/content/post-13.jpg",
    },
    {
        author: "Kayla White",
        date: "December 26",
        profile_picture: "../images/fakebook/profile.png",
        visibility: "../images/fakebook/posts/public.svg",
        reaction_count: "88K",
        comment_count: "9K",
        share_count: "988",
        image: "../images/fakebook/posts/content/post-14.jpg",
    },
    {
        author: "Joanna Russell",
        date: "January 12",
        profile_picture: "../images/fakebook/profile.png",
        visibility: "../images/fakebook/posts/public.svg",
        reaction_count: "47K",
        comment_count: "1K",
        share_count: "506",
        image: "../images/fakebook/posts/content/post-15.jpg",
    },
];

for (let i = 0; i < posts.length; i++) {
    post_data = posts[i];

    createPost(post_data);
}
