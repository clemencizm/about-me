const urlPageTitle = "JS SPA Routing";

document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches('nav a')) {
    return;
  }
  e.preventDefault();
  console.log("Navigating to:", target.href); // Debugging log
  urlRoute(e);
});

const urlRoutes = {
  404: {
    template: "/templates/404.html",
    title: "404 " + urlPageTitle,
    description: "Page not found",
  },
  "/": {
    template: "/templates/home.html", // Adjusted path for the homepage content
    title: "Home " + urlPageTitle,
    description: "This is the homepage",
  },
  "/about": {
    template: "/templates/about.html",
    title: "About " + urlPageTitle,
    description: "",
  },
  "/contact": {
    template: "/templates/contact.html",
    title: "Contact " + urlPageTitle,
    description: "",
  },
  "/newsletter": {
    template: "/templates/newsletter.html",
    title: "Newsletter " + urlPageTitle,
    description: "",
  }
};

const urlRoute = (event) => {
  event.preventDefault();
  window.history.pushState({}, '', event.target.href);
  urlLocationHandler();
};

const urlLocationHandler = async () => {
  let location = window.location.pathname;
  if (location === '') {
    location = "/";
  }

  console.log("Handling location:", location); // Debugging log

  const route = urlRoutes[location] || urlRoutes[404];
  try {
    const response = await fetch(route.template);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const html = await response.text();
    document.getElementById("content").innerHTML = html;
    document.title = route.title;
    document.querySelector('meta[name="description"]').setAttribute("content", route.description);
    console.log("Loaded content for:", location); // Debugging log

    // Load the script.js file dynamically after content is loaded
    if (location === "/") {
      loadScript('js/script.js', initializeHomeScripts);
    }

  } catch (error) {
    console.error("Error loading page:", error); // Debugging log
    document.getElementById("content").innerHTML = "<h1>Error loading page</h1>";
    document.title = "Error " + urlPageTitle;
    document.querySelector('meta[name="description"]').setAttribute("content", "Error loading page");
  }
};

// Function to load external scripts dynamically
const loadScript = (src, callback) => {
  const script = document.createElement('script');
  script.src = src;
  script.onload = callback;
  document.body.appendChild(script);
};

// Call urlLocationHandler when the page loads
urlLocationHandler();

// Listen for popstate event
window.addEventListener('popstate', urlLocationHandler);
