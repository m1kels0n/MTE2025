/* LOGIN */
const accounts = [
    { username: "aaccup", password: "tup123" },
    { username: "mte", password: "123" }
];


const areaContent = [
    {
        title: "COMPLIANCE REPORT",
        type: "folder",
        children: [
            { title: "AREA 1: Vision, Mission, Goals & Objectives",
               type: "folder",
               children: [
                    {title: "Well Define Objectives",
                     type: "folder",
                     children: [
                        //  { title: "File", type:"file", link:"https://drive.google.com/file/d/10bS1LMgWX0pUY-jwsv0SJ9fnCPE6idq9/preview"},
                         { title: "Activity reports- TUP strategic plan 2024- 2028", type:"file", link:"https://drive.google.com/file/d/1pvPe4YA0jqrZpyi8Mbogy3XK6P72U3AJ/preview"},
                         { title: "Compliance Report_MTE_Area I_VMGO with Cover page", type:"file", link:"https://drive.google.com/file/d/1c_SYiort0wgzqhK-Frz9Gu-voFe7C7w7/preview"}    
                     ]
                    },    
                    {title: "Supporting Documents",
                     type: "folder",
                     children: [
                         { title: "File1", type:"file", link:""},
                         { title: "File2", type:"file", link:"#"}
                     ]
                    },               
                ]
            },

            {   title: "AREA 2: Faculty",
                type: "folder",
                children: [
                    // {title: "Well Define Objectives",
                    //  type: "folder",
                    //  children: [
                    //      { title: "Endorsement of Manual Operations and Agenda", type:"file", link:"https://drive.google.com/file/d/10bS1LMgWX0pUY-jwsv0SJ9fnCPE6idq9/preview"},
                    //      { title: "Old University Research and Development Manual of Operations", type:"file", link:"https://drive.google.com/file/d/1QmzmDmxEdVmf0Qok2_dH5eJuKSgAirfk/preview"}
                    //  ]
                    // },    
                    // {title: "Supporting Documents",
                    //  type: "folder",
                    //  children: [
                    //      { title: "File1", type:"file", link:""},
                    //      { title: "File2", type:"file", link:"#"}
                    //  ]
                    // },               
                ]
            },
            {   title: "AREA 3: Curriculum & Instruction",
                type: "folder",
                children: [
                    // {title: "Well Define Objectives",
                    //  type: "folder",
                    //  children: [
                    //      { title: "Endorsement of Manual Operations and Agenda", type:"file", link:"https://drive.google.com/file/d/10bS1LMgWX0pUY-jwsv0SJ9fnCPE6idq9/preview"},
                    //      { title: "Old University Research and Development Manual of Operations", type:"file", link:"https://drive.google.com/file/d/1QmzmDmxEdVmf0Qok2_dH5eJuKSgAirfk/preview"}
                    //  ]
                    // },    
                    // {title: "Supporting Documents",
                    //  type: "folder",
                    //  children: [
                    //      { title: "File1", type:"file", link:""},
                    //      { title: "File2", type:"file", link:"#"}
                    //  ]
                    // },               
                ]
            },

            {   title: "AREA 4: Support to Students",
                type: "folder",
                children: [
                    // {title: "Well Define Objectives",
                    //  type: "folder",
                    //  children: [
                    //      { title: "Endorsement of Manual Operations and Agenda", type:"file", link:"https://drive.google.com/file/d/10bS1LMgWX0pUY-jwsv0SJ9fnCPE6idq9/preview"},
                    //      { title: "Old University Research and Development Manual of Operations", type:"file", link:"https://drive.google.com/file/d/1QmzmDmxEdVmf0Qok2_dH5eJuKSgAirfk/preview"}
                    //  ]
                    // },    
                    // {title: "Supporting Documents",
                    //  type: "folder",
                    //  children: [
                    //      { title: "File1", type:"file", link:""},
                    //      { title: "File2", type:"file", link:"#"}
                    //  ]
                    // },               
                ]
            },
            
            {   title: "AREA 5: Research",
                type: "folder",
                children: [
                    {title: "Well Define Objectives",
                     type: "folder",
                     children: [
                         { title: "Endorsement of Manual Operations and Agenda", type:"file", link:"https://drive.google.com/file/d/10bS1LMgWX0pUY-jwsv0SJ9fnCPE6idq9/preview"},
                         { title: "Old University Research and Development Manual of Operations", type:"file", link:"https://drive.google.com/file/d/1QmzmDmxEdVmf0Qok2_dH5eJuKSgAirfk/preview"},
                         { title: "Timeline of revision for the university research and development and university extension manual of operations and agenda 3.19.2025", type:"file", link:"https://drive.google.com/file/d/1kQQoKReEoyD9cEH7BjZyAb1Wjw3LP2L_/preview"}
                     ]
                    },    
                    {title: "Supporting Documents",
                     type: "folder",
                     children: [
                         { title: "File1", type:"file", link:""},
                         { title: "File2", type:"file", link:"#"}
                     ]
                    },               
                ]
            },
            {   title: "AREA 6: Extension",
                type: "folder",
                children: [
                    // {title: "Well Define Objectives",
                    //  type: "folder",
                    //  children: [
                    //      { title: "Endorsement of Manual Operations and Agenda", type:"file", link:"https://drive.google.com/file/d/10bS1LMgWX0pUY-jwsv0SJ9fnCPE6idq9/preview"},
                    //      { title: "Old University Research and Development Manual of Operations", type:"file", link:"https://drive.google.com/file/d/1QmzmDmxEdVmf0Qok2_dH5eJuKSgAirfk/preview"}
                    //  ]
                    // },    
                    // {title: "Supporting Documents",
                    //  type: "folder",
                    //  children: [
                    //      { title: "File1", type:"file", link:""},
                    //      { title: "File2", type:"file", link:"#"}
                    //  ]
                    // },               
                ]
            },
            {   title: "AREA 7: Library",
                type: "folder",
                children: [
                    // {title: "Well Define Objectives",
                    //  type: "folder",
                    //  children: [
                    //      { title: "Endorsement of Manual Operations and Agenda", type:"file", link:"https://drive.google.com/file/d/10bS1LMgWX0pUY-jwsv0SJ9fnCPE6idq9/preview"},
                    //      { title: "Old University Research and Development Manual of Operations", type:"file", link:"https://drive.google.com/file/d/1QmzmDmxEdVmf0Qok2_dH5eJuKSgAirfk/preview"}
                    //  ]
                    // },    
                    // {title: "Supporting Documents",
                    //  type: "folder",
                    //  children: [
                    //      { title: "File1", type:"file", link:""},
                    //      { title: "File2", type:"file", link:"#"}
                    //  ]
                    // },               
                ]
            },
            {   title: "AREA 8: Physical Plant & Facilities",
                type: "folder",
                children: [
                    // {title: "Well Define Objectives",
                    //  type: "folder",
                    //  children: [
                    //      { title: "Michael", type:"file", link:"https://drive.google.com/file/d/10bS1LMgWX0pUY-jwsv0SJ9fnCPE6idq9/preview"},
                    //      { title: "Old University Research and Development Manual of Operations", type:"file", link:"https://drive.google.com/file/d/1QmzmDmxEdVmf0Qok2_dH5eJuKSgAirfk/preview"}
                    //  ]
                    // },    
                    // {title: "Supporting Documents",
                    //  type: "folder",
                    //  children: [
                    //      { title: "File1", type:"file", link:""},
                    //      { title: "File2", type:"file", link:"#"}
                    //  ]
                    // },               
                ]
            },
            {   title: "AREA 9: Laboratories",
                type: "folder",
                children: [
                    // {title: "Well Define Objectives",
                    //  type: "folder",
                    //  children: [
                    //      { title: "Endorsement of Manual Operations and Agenda", type:"file", link:"https://drive.google.com/file/d/10bS1LMgWX0pUY-jwsv0SJ9fnCPE6idq9/preview"},
                    //      { title: "Old University Research and Development Manual of Operations", type:"file", link:"https://drive.google.com/file/d/1QmzmDmxEdVmf0Qok2_dH5eJuKSgAirfk/preview"}
                    //  ]
                    // },    
                    // {title: "Supporting Documents",
                    //  type: "folder",
                    //  children: [
                    //      { title: "File1", type:"file", link:""},
                    //      { title: "File2", type:"file", link:"#"}
                    //  ]
                    // },               
                ]
            },
            {   title: "AREA 10: Administration",
                type: "folder",
                children: [
                    // {title: "Well Define Objectives",
                    //  type: "folder",
                    //  children: [
                    //      { title: "Endorsement of Manual Operations and Agenda", type:"file", link:"https://drive.google.com/file/d/10bS1LMgWX0pUY-jwsv0SJ9fnCPE6idq9/preview"},
                    //      { title: "Old University Research and Development Manual of Operations", type:"file", link:"https://drive.google.com/file/d/1QmzmDmxEdVmf0Qok2_dH5eJuKSgAirfk/preview"}
                    //  ]
                    // },    
                    // {title: "Supporting Documents",
                    //  type: "folder",
                    //  children: [
                    //      { title: "File1", type:"file", link:""},
                    //      { title: "File2", type:"file", link:"#"}
                    //  ]
                    // },               
                ]
            },

        ]
    },
{
        title: "NARRATIVE REPORT",
        type: "folder",
        children: [
            {
                title: "AREA 3 - Instruction",
                type: "folder",
                children: [
                    { title: "File1", type:"file", link:"#"},
                    { title: "File2", type:"file", link:"#"}
                ]
            },

            {
                title: "AREA 5 - Research",
                type: "folder",
                children: [
                    { title: "File1", type:"file", link:"#"},
                    { title: "File2", type:"file", link:"#"}
                ]
            },
            {
                title: "AREA 6 - Extension",
                type: "folder",
                children: [
                    { title: "File1", type:"file", link:"#"},
                    { title: "File2", type:"file", link:"#"}
                ]
            },
            {
                title: "AREA 7 - Library",
                type: "folder",
                children: [
                    { title: "File1", type:"file", link:"#"},
                    { title: "File2", type:"file", link:"#"}
                ]
            },
        ]
    },

];


function buildMenuRecursive(items) {
    let html = "<ul>";

    items.forEach(item => {
        const id = "id_" + Math.random().toString(36).slice(2);

        html += `<li>`;

        if (item.type === "folder") {
            // folder/area label
            html += `
                    <div class="${item.title.toUpperCase().startsWith('AREA') ? 'area-title' : 'folder'}"
                    onclick="toggleMenu('${id}', this)">
                    <span class="arrow">▶</span> ${item.title}
                </div>

            `;

            // IMPORTANT: nested UL INSIDE SAME <li>
            html += `
                <ul id="${id}" style="display:none;">
                    ${buildMenuRecursive(item.children)}
                </ul>
            `;
        }
        else if (item.type === "file") {
            const isPDF = item.link.includes("/preview"); // Drive preview → PDF
            html += `
                <div class="file"
                    data-title="${item.title.toLowerCase()}"
                    data-type="${isPDF ? "pdf" : "other"}"
                    onclick="highlightMenu(this)">
                    <a onclick="loadPDF('${item.link}')" data-original="${item.title}">
                        ${item.title}
                    </a>

                </div>
            `;
        }


        html += `</li>`;
    });

    html += "</ul>";
    return html;
}

/* ---------------------------
   BUILD MENU
----------------------------*/
function buildMenu() {
    document.getElementById("menuContainer").innerHTML = buildMenuRecursive(areaContent);
}

/* ---------------------------
   ACTIONS
----------------------------*/
function toggleMenu(id, element) {
    const list = document.getElementById(id);

    const isHidden = list.style.display === "none" || list.style.display === "";

    // Toggle visibility
    list.style.display = isHidden ? "block" : "none";

    // Arrow rotation
    const arrow = element.querySelector(".arrow");
    if (arrow) {
        arrow.classList.toggle("rotate", isHidden);
    }
}


function highlightMenu(el) {
    document.querySelectorAll(".file").forEach(x=>x.classList.remove("active-menu"));
    el.classList.add("active-menu");
}

function loadPDF(url) {
    if (url !== "#")
        document.getElementById("pdfFrame").src = url;

    // AUTO-HIDE SIDEBAR ON MOBILE WHEN FILE IS SELECTED
    if (window.innerWidth < 768) {
        document.getElementById("sidebar").classList.remove("active");
    }
}


function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
    // SECURITY: Redirect logic
    const isSystemPage = document.getElementById("systemPage");
    const isLoginPage = document.getElementById("loginPage");

    // CHECK 1: If on System Page
    if (isSystemPage) {
        if (!localStorage.getItem("isLoggedIn")) {
            // Not logged in? Go to login immediately (System page remains hidden)
            window.location.href = "login.html";
        } else {
            // Logged in? SAFE TO SHOW THE PAGE
            isSystemPage.style.display = "flex";
        }
    }

    // CHECK 2: If on Login Page
    if (isLoginPage) {
        if (localStorage.getItem("isLoggedIn")) {
            // Already logged in? Go to index immediately (Login page remains hidden)
            window.location.href = "index.html";
        } else {
            // Not logged in? SAFE TO SHOW THE PAGE
            isLoginPage.style.display = "flex";
        }
    }

    // ... Keep the rest of your setup code (Event Listeners) below ...
    
    // SETUP: Login "Enter" Key Trigger
    const loginInputs = document.querySelectorAll("#loginBox input");
    // (Rest of the code remains the same)
});

/* LOGIN */
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const errorDiv = document.getElementById("loginError");

    const validUser = accounts.find(acc => acc.username === user && acc.password === pass);

    if (validUser) {
        // Save login state
        localStorage.setItem("isLoggedIn", "true");
        // Redirect to main page
        window.location.href = "index.html";
    } else {
        errorDiv.textContent = "Invalid Username or Password";
        errorDiv.style.color = "yellow";
    }
}

function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
}

function searchPDF() {
    const query = document.getElementById("searchBox").value.toLowerCase();
    const files = document.querySelectorAll("#menuContainer .file");

    // If empty → full reset
    if (!query.trim()) {
        restoreMenu();
        return;
    }

    // FIRST: Reset all files (hide them) + restore original text
    files.forEach(file => {
        file.style.display = "none";
        const a = file.querySelector("a");
        // Only reset innerHTML if data-original exists to prevent errors
        if (a.hasAttribute("data-original")) {
            a.innerHTML = a.getAttribute("data-original");
        }
    });

    // SECOND: Loop through ALL files and show matches
    files.forEach(file => {
        const title = file.getAttribute("data-title");
        const type = file.getAttribute("data-type"); // Note: your HTML sets this to "pdf" or "other"

        // Check if title exists and matches query
        if (title && title.includes(query)) {

            // 1. Show the file
            file.style.display = "block";

            // 2. Expand all parent folders (and rotate arrows via the updated function)
            expandParents(file);

            // 3. Highlight keyword
            const a = file.querySelector("a");
            const original = a.getAttribute("data-original");
            
            // Safe regex escape to prevent crashes on symbols like ( )
            const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
            const regex = new RegExp("(" + safeQuery + ")", "gi");
            
            a.innerHTML = original.replace(regex, `<span class="highlight">$1</span>`);
        }
    });
}





function expandParents(element) {
    let parent = element.parentElement;

    while (parent && parent.id !== "menuContainer") {
        if (parent.tagName === "UL") {
            // 1. Show the folder content
            parent.style.display = "block";

            // 2. Rotate the arrow of this folder
            // The folder title <div> is immediately before the <ul>
            const folderTitle = parent.previousElementSibling; 
            if (folderTitle) {
                const arrow = folderTitle.querySelector(".arrow");
                if (arrow) {
                    arrow.classList.add("rotate");
                }
            }
        }
        parent = parent.parentElement;
    }
}

function restoreMenu() {
    // Rebuild menu completely to reset all structure
    buildMenu();

    // Clear arrow rotations
    document.querySelectorAll(".arrow").forEach(a => {
        a.classList.remove("rotate");
        a.classList.remove("open");
    });
}

document.getElementById("searchBox").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        if (this.value.trim() === "") {
            restoreMenu();   // Reset menu when search bar is empty
        } else {
            searchPDF();     // Search normally
        }
    }
    else if (e.key === "Escape") {
        this.value = "";
        restoreMenu();
    }
});

document.getElementById("searchBox").addEventListener("input", function () {
    if (this.value.trim() === "") {
        restoreMenu();
    }
});


document.querySelectorAll("#loginBox input").forEach(input => {
    input.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            login();
        }
    });
});

window.onload = () => { buildMenu(); };
