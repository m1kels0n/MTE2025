/* LOGIN */
const accounts = [
    { username: "admin", password: "12345" },
    { username: "user", password: "12345" }
];


const areaContent = [
    {
        title: "COMPLIANCE REPORT",
        type: "folder",
        children: [
            { title: "AREA 1: VMGO",
               type: "folder",
               children: [
                    {title: "Well Define Objectives",
                     type: "folder",
                     children: [
                         { title: "Endorsement of Manual Operations and Agenda", type:"file", link:"https://drive.google.com/file/d/10bS1LMgWX0pUY-jwsv0SJ9fnCPE6idq9/preview"},
                         { title: "Old University Research and Development Manual of Operations", type:"file", link:"https://drive.google.com/file/d/1QmzmDmxEdVmf0Qok2_dH5eJuKSgAirfk/preview"}
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
            {   title: "AREA 2: FACULTY",
                type: "folder",
                children: [
                    {title: "Well Define Objectives",
                     type: "folder",
                     children: [
                         { title: "Endorsement of Manual Operations and Agenda", type:"file", link:"https://drive.google.com/file/d/10bS1LMgWX0pUY-jwsv0SJ9fnCPE6idq9/preview"},
                         { title: "Old University Research and Development Manual of Operations", type:"file", link:"https://drive.google.com/file/d/1QmzmDmxEdVmf0Qok2_dH5eJuKSgAirfk/preview"}
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
            {   title: "AREA 3: CURRICULUM & INSTRUCTION",
                type: "folder",
                children: [
                    {title: "Well Define Objectives",
                     type: "folder",
                     children: [
                         { title: "Endorsement of Manual Operations and Agenda", type:"file", link:"https://drive.google.com/file/d/10bS1LMgWX0pUY-jwsv0SJ9fnCPE6idq9/preview"},
                         { title: "Old University Research and Development Manual of Operations", type:"file", link:"https://drive.google.com/file/d/1QmzmDmxEdVmf0Qok2_dH5eJuKSgAirfk/preview"}
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
            {   title: "AREA 4: Support to Students",
                type: "folder",
                children: [
                    {title: "Well Define Objectives",
                     type: "folder",
                     children: [
                         { title: "Endorsement of Manual Operations and Agenda", type:"file", link:"https://drive.google.com/file/d/10bS1LMgWX0pUY-jwsv0SJ9fnCPE6idq9/preview"},
                         { title: "Old University Research and Development Manual of Operations", type:"file", link:"https://drive.google.com/file/d/1QmzmDmxEdVmf0Qok2_dH5eJuKSgAirfk/preview"}
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
                    {title: "Well Define Objectives",
                     type: "folder",
                     children: [
                         { title: "Endorsement of Manual Operations and Agenda", type:"file", link:"https://drive.google.com/file/d/10bS1LMgWX0pUY-jwsv0SJ9fnCPE6idq9/preview"},
                         { title: "Old University Research and Development Manual of Operations", type:"file", link:"https://drive.google.com/file/d/1QmzmDmxEdVmf0Qok2_dH5eJuKSgAirfk/preview"}
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
            {   title: "AREA 7: Library",
                type: "folder",
                children: [
                    {title: "Well Define Objectives",
                     type: "folder",
                     children: [
                         { title: "Endorsement of Manual Operations and Agenda", type:"file", link:"https://drive.google.com/file/d/10bS1LMgWX0pUY-jwsv0SJ9fnCPE6idq9/preview"},
                         { title: "Old University Research and Development Manual of Operations", type:"file", link:"https://drive.google.com/file/d/1QmzmDmxEdVmf0Qok2_dH5eJuKSgAirfk/preview"}
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
            {   title: "AREA 8: Physical Plant & Facilities",
                type: "folder",
                children: [
                    {title: "Well Define Objectives",
                     type: "folder",
                     children: [
                         { title: "Michael", type:"file", link:"https://drive.google.com/file/d/10bS1LMgWX0pUY-jwsv0SJ9fnCPE6idq9/preview"},
                         { title: "Old University Research and Development Manual of Operations", type:"file", link:"https://drive.google.com/file/d/1QmzmDmxEdVmf0Qok2_dH5eJuKSgAirfk/preview"}
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
            {   title: "AREA 9: Laboratories",
                type: "folder",
                children: [
                    {title: "Well Define Objectives",
                     type: "folder",
                     children: [
                         { title: "Endorsement of Manual Operations and Agenda", type:"file", link:"https://drive.google.com/file/d/10bS1LMgWX0pUY-jwsv0SJ9fnCPE6idq9/preview"},
                         { title: "Old University Research and Development Manual of Operations", type:"file", link:"https://drive.google.com/file/d/1QmzmDmxEdVmf0Qok2_dH5eJuKSgAirfk/preview"}
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
            {   title: "AREA 10: Administration",
                type: "folder",
                children: [
                    {title: "Well Define Objectives",
                     type: "folder",
                     children: [
                         { title: "Endorsement of Manual Operations and Agenda", type:"file", link:"https://drive.google.com/file/d/10bS1LMgWX0pUY-jwsv0SJ9fnCPE6idq9/preview"},
                         { title: "Old University Research and Development Manual of Operations", type:"file", link:"https://drive.google.com/file/d/1QmzmDmxEdVmf0Qok2_dH5eJuKSgAirfk/preview"}
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
                title: "Area 5 - Research",
                type: "folder",
                children: [
                    { title: "SD File1", type:"file", link:"#"},
                    { title: "SD File2", type:"file", link:"#"},
                    { title: "Video", type:"file", link:"#"}
                ]
            },
            {
                title: "Area 6 - Extension",
                type: "folder",
                children: [
                    { title: "SD File1", type:"file", link:"#"},
                    { title: "SD File2", type:"file", link:"#"},
                    { title: "Video", type:"file", link:"#"}
                ]
            },
            {
                title: "Area 7 - Library",
                type: "folder",
                children: [
                    { title: "SD File1", type:"file", link:"#"},
                    { title: "SD File2", type:"file", link:"#"},
                    { title: "Video", type:"file", link:"#"}
                ]
            }
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
                <div class="${item.title.startsWith('Area') ? 'area-title' : 'folder'}"
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
                    <a onclick="loadPDF('${item.link}')">${item.title}</a>
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

/* LOGIN */
function login() {
    const usr = username.value.trim();
    const pwd = password.value.trim();

    if (accounts.find(u=>u.username===usr && u.password===pwd)) {
        loginPage.style.display = "none";
        systemPage.style.display = "flex";
        buildMenu();
    } else {
        loginError.textContent = "Invalid username or password";
    }
}

function searchPDF() {
    const query = document.getElementById("searchBox").value.toLowerCase();

    const files = document.querySelectorAll("#menuContainer .file");

    if (!query) {
        restoreMenu();
        return;
    }

    // Hide all files initially
    files.forEach(f => (f.style.display = "none"));

    files.forEach(file => {
        const title = file.getAttribute("data-title");
        const type = file.getAttribute("data-type");

        if (type === "pdf" && title.includes(query)) {
            file.style.display = "block";
            expandParents(file);

            // rotate arrow for opened sections
            rotateParentArrows(file);
        }
    });
}



function expandParents(element) {
    let parent = element.parentElement;

    while (parent && parent.id !== "menuContainer") {
        if (parent.tagName === "UL") {
            parent.style.display = "block";
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


window.onload = () => { buildMenu(); };
