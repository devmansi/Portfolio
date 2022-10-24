import urlShortnerAppImages from './images/urlShortnerApp/index';
import crowdFundingAppImages from './images/crowdFunding/index';
import ipAddressTrackerImages from './images/ipAddressTracker/index';
import jobFilterImages from './images/jobFilter/index';
import tipCalculatorImages from './images/tipCalculator/index';
import maptyImages from './images/mapty/index';
import todoListAppImages from './images/todoListApp/index';
import githubUserSearchAppImages from './images/userSearchApp/index';

const data = [
    {
        id: 1,
        title: "Crowd Funding website",
        description: "This challenge will test both your layout and state management skills. As visitors make pledges, your goal is to keep track of the changes.",
        website: "https://design-crowdfunding-product-page.netlify.app",
        github: "https://github.com/devmansi/Crowdfunding-Product-Page",
        images: crowdFundingAppImages
    },
    {
        id: 2,
        title: "Url Shortner App",
        description: "Just short links that are too long for convenience. With a beautiful and intuitive design, it's easier than ever to make your URLs a bit shorter.",
        website: "https://design-url-shortening-app.netlify.app",
        github: "https://github.com/devmansi/URL-Shortening-App",
        images: urlShortnerAppImages
    },
    {
        id: 3,
        title: "IP Address Tracker",
        description: "In this project, I have used two separate APIs together to create an IP Address Tracking app which shows location of any IP/Domain.",
        website: "https://design-ip-address-tracker.netlify.app",
        github: "https://github.com/devmansi/IP-Address-Tracker",
        images: ipAddressTrackerImages
    },
    {
        id: 4,
        title: "Job filter App",
        description: "In this project, I have implemented filter to filter out jobs based on selected categories. Using JSON file for Job data.",
        website: "https://design-job-filter.netlify.app",
        github: "https://github.com/devmansi/Job-Filter",
        images: jobFilterImages
    },
    {
        id: 5,
        title: "Tip Calculator App",
        description: "This App calculates tip per person based on amount of bill, tip percentage and number of people. Custom tip percentage can also be provided.",
        website: "https://design-tip-calci.netlify.app",
        github: "https://github.com/devmansi/Tip-Calculator-React",
        images: tipCalculatorImages
    },
    {
        id: 6,
        title: "Mapty",
        description: "Mapty is a vanilla JavaScript based workout tracker application that interacts with the Leaflet library and display Map. The user can add workouts for running and cycling and these are stored via local storage.",
        website: "https://design-mapty-myapp.netlify.app",
        github: "https://github.com/devmansi/Mapty-myApp",
        images: maptyImages
    },
    {
        id: 7,
        title: "Todo App",
        description: "The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test.",
        website: "https://design-todo-list-app.netlify.app",
        github: "https://github.com/devmansi/To-Do-List-App",
        images: todoListAppImages
    },
    {   id: 8,
        title: "GitHub User Search App",
        description: "This App gives user options to search for any github user and display his/her information. I have used GitHub users API to pull profile data.",
        website: "https://deisgn-user-search-app.netlify.app/",
        github: "https://github.com/devmansi/User-Search-App",
        images: githubUserSearchAppImages
    }
];

export default data;