import moment from "moment/moment"

export const navBarLinks = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "gallery", path: "/gallery" },
    { name: "schedule", path: "/schedule/monday" },
    { name: "blog", path: "/blog" },
    { name: "pricing", path: "/pricing" },
    { name: "classes", path: "/classes" },
    { name: "contact", path: "/contact" }
]

export const gymClasses = [
    { name: "fitness Classes" },
    { name: "aerobics classes" },
    { name: "power yoga" },
    { name: "learn machines" },
    { name: "full-body strength" },
]

export const galleryImages = [[{ url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
{ url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" },
{ url: "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=796&q=80" },
{ url: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" },
{ url: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
{ url: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1546&q=80" },
{ url: "https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
{ url: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" },
],
[{ url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" },
{ url: "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" },
{ url: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
{ url: "https://images.unsplash.com/photo-1591027480007-a42f6ef886c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },]]


export const weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

export const classScheduleData = {
    monday: [
        { name_of_class: "fitness", time: "9:00am - 10:00am", trainer: "david vila" },
        { name_of_class: "body building", time: "10:00pm - 11:00pm", trainer: "john weights" },
        { name_of_class: "running", time: "4:00pm - 5:00pm", trainer: "junifor jonas" },
        { name_of_class: "cycling", time: "6:00pm - 7:00pm", trainer: "robert louis" }
    ],
    tuesday: [
        { name_of_class: "boxing", time: "9:00pm - 10:00am", trainer: "mike tyson" },
        { name_of_class: "yoga", time: "10:00pm - 11:00pm", trainer: "mia kha" },
        { name_of_class: "crossfit", time: "4:00pm - 5:00pm", trainer: "christopher columbo" },
    ],
    wednesday: [
        { name_of_class: "cycling", time: "9:00am - 10:00am", trainer: "mario vreco" },
        { name_of_class: "body building", time: "10:00pm - 11:00pm", trainer: "john weights" },
        { name_of_class: "fitness", time: "4:00pm - 5:00pm", trainer: "tom rizzly" },
        { name_of_class: "running", time: "6:00pm - 7:00pm", trainer: "michael jonson" }
    ],
    thursday: [
        { name_of_class: "fitness", time: "9:00am - 10:00am", trainer: "david vila" },
        { name_of_class: "body building", time: "10:00pm - 11:00pm", trainer: "john weights" },
        { name_of_class: "running", time: "4:00pm - 5:00pm", trainer: "junifor jonas" },
    ],
    friday: [
        { name_of_class: "crossfit", time: "9:00am - 10:00am", trainer: "mike mich" },
        { name_of_class: "karate", time: "10:00pm - 11:00pm", trainer: "john jones" },
        { name_of_class: "meditation", time: "4:00pm - 5:00pm", trainer: "lara croft" },
        { name_of_class: "workout", time: "6:00pm - 7:00pm", trainer: "lary wheels" }
    ],
    saturday: [
        { name_of_class: "power lifting", time: "9:00am - 10:00am", trainer: "david laid" },
        { name_of_class: "boxing", time: "10:00pm - 11:00pm", trainer: "tyson fury" },
        { name_of_class: "yoga", time: "4:00pm - 5:00pm", trainer: "milica tails" },
    ],
    sunday: [
        { name_of_class: "fitness", time: "9:00am - 10:00am", trainer: "david vila" },
        { name_of_class: "body building", time: "10:00pm - 11:00pm", trainer: "john weights" },
        { name_of_class: "running", time: "4:00pm - 5:00pm", trainer: "junifor jonas" },
        { name_of_class: "cycling", time: "6:00pm - 7:00pm", trainer: "robert louis" }
    ],
}

export const blogList = [
    {
        author: "admin",
        date: moment().format("MMMM D, YYYY"),
        exercise_name: "yoga",
        title: `yoga for everyone in ${new Date().getFullYear()}`,
        text: "",
        img_url: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1452&q=80",
    },
    {
        author: "admin",
        date: moment().format("MMMM D, YYYY"),
        exercise_name: "yoga",
        title: "getting back into crossfit after vacation",
        text: "",
        img_url: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    },
    {
        author: "admin",
        date: moment().format("MMMM D, YYYY"),
        exercise_name: "yoga",
        title: "meet fitness ambassador grace",
        text: "",
        img_url: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
        author: "admin",
        date: moment().format("MMMM D, YYYY"),
        exercise_name: "yoga",
        title: "give your fitness a boost with our gym",
        text: "",
        img_url: "https://plus.unsplash.com/premium_photo-1661284886010-c58530c86b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
        author: "admin",
        date: moment().format("MMMM D, YYYY"),
        exercise_name: "yoga",
        title: "how to get your kids moving throughout the summer",
        text: "",
        img_url: "https://images.unsplash.com/photo-1559838831-d8fbd8af6469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
        author: "admin",
        date: moment().format("MMMM D, YYYY"),
        exercise_name: "yoga",
        title: "give your fitness a boost with our gym challenge",
        text: "",
        img_url: "https://plus.unsplash.com/premium_photo-1663126251623-adb89a41a31e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VtbWVyJTIwZ3ltfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },

]


export const exerciseCategories = [
    {
        name: "body building",
        quantity: 4,
    },
    {
        name: "boxing",
        quantity: 3,
    },
    {
        name: "crossfit",
        quantity: 4,
    },
    {
        name: "fitness",
        quantity: 4,
    },
    {
        name: "meditation",
        quantity: 4,
    },
    {
        name: "yoga",
        quantity: 2,
    }
]

export const recentBlogPosts = [
    {
        title: `yoga for everyone in ${new Date().getFullYear()}`,
        date: moment().format("MMMM D, YYYY"),
        img_url: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1452&q=80",
    },
    {
        title: "getting back into crossfit",
        date: moment().format("MMMM D, YYYY"),
        img_url: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    },
    {
        title: "meet fitness ambassador grace",
        date: moment().format("MMMM D, YYYY"),
        img_url: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
        title: "the best are european meditation practitioner",
        date: moment().format("MMMM D, YYYY"),
        img_url: "https://images.unsplash.com/photo-1532798442725-41036acc7489?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    },
    {
        title: "learn boxing with our trainer john",
        date: moment().format("MMMM D, YYYY"),
        img_url: "https://plus.unsplash.com/premium_photo-1672791862975-875406fe8f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    },
    {
        title: "how to get lean for the summer",
        date: moment().format("MMMM D, YYYY"),
        img_url: "https://plus.unsplash.com/premium_photo-1663126251623-adb89a41a31e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VtbWVyJTIwZ3ltfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
]

export const popularTags = ["crossfit", "fitness", "gym", "meditation", "running", "workout", "yoga", "boxing"]

export const pricingPlans = [
    {
        title: "beginners",
        price: 39,
        programs: ["free hand", "gym fitness", "weight loss", "personal trainer", "cycling"],
        img_url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
        title: "advanced",
        price: 65,
        programs: ["free hand", "gym fitness", "weight loss", "personal trainer", "cycling"],
        img_url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
        title: "pro",
        price: 65,
        programs: ["free hand", "gym fitness", "weight loss", "personal trainer", "cycling"],
        img_url: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
]

export const exerciseClasses = [
    {
        title: "cycling",
        teacher: "dorian yate",
        timing: "wed: 9:00 am",
        img_url: "https://plus.unsplash.com/premium_photo-1664297818287-98ffc7a7eef6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    },
    {
        title: "meditation",
        teacher: "maria mich",
        timing: "fri: 1:00 pm",
        img_url: "https://plus.unsplash.com/premium_photo-1663050712656-f240e3cdd7d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
        title: "boxing",
        teacher: "john flex",
        timing: "tue: 4:00 pm",
        img_url: "https://images.unsplash.com/photo-1517438322307-e67111335449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    },
    {
        title: "karate",
        teacher: "david rich",
        timing: "sat: 9:00 am",
        img_url: "https://images.unsplash.com/photo-1602827114696-738d7ee10b3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
        title: "power lifting",
        teacher: "larry wheels",
        timing: "mon: 8:00 pm",
        img_url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
        title: "workout",
        teacher: "shawn ray",
        timing: "sun: 10:00 am",
        img_url: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
    },
    {
        title: "crossfit",
        teacher: "jennifer alex",
        timing: "wed: 9:00 pm",
        img_url: "https://plus.unsplash.com/premium_photo-1661404013587-61a4a81b9907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
    },
    {
        title: "running",
        teacher: "zinia zessy",
        timing: "fri: 6:00 am",
        img_url: "https://images.unsplash.com/photo-1648995361141-30676a75fd27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJ1bm5pbmclMjBneW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "body building",
        teacher: "jake paul",
        timing: "mon: 8:00 pm",
        img_url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvZHlidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        title: "mma",
        teacher: "becky lynch",
        timing: "fri: 6:00 am",
        img_url: "https://images.unsplash.com/photo-1615117950029-db3cf44bdefa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1tYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        title: "yoga",
        teacher: "marta mich",
        timing: "wed: 8:00 am",
        img_url: "https://images.unsplash.com/photo-1520877745935-616158eb7fcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1233&q=80",
    },
    {
        title: "fitness",
        teacher: "mia alex",
        timing: "sun: 5:00 pm",
        img_url: "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
    },

]