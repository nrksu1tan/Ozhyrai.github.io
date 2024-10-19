
FamilyTree.templates.tommy = Object.assign({}, FamilyTree.templates.base);

FamilyTree.templates.tommy.defs = 
    `<style>
        .{randId} .bft-edit-form-header, .{randId} .bft-img-button{
            background-color: #2b2f3a; /* Тёмно-серый */
        }
        .{randId}.male .bft-edit-form-header, .{randId}.male .bft-img-button{
            background-color: #3c4f6d; /* Тёмно-синий */
        }        
        .{randId}.male div.bft-img-button:hover{
            background-color: #4a5b77; /* Чуть светлее при наведении */
        }
        .{randId}.female .bft-edit-form-header, .{randId}.female .bft-img-button{
            background-color: #4a5b77; /* Такой же для женских персонажей */
        }        
        .{randId}.female div.bft-img-button:hover{
            background-color: #5a6b87; /* Светлее при наведении */
        }
    </style>`;

FamilyTree.templates.tommy.field_0 = 
    `<text ${FamilyTree.attr.width}="230" style="font-size: 18px;font-weight:bold;" fill="#ffffff" x="10" y="90" text-anchor="start">{val}</text>`;
FamilyTree.templates.tommy.field_1 = 
    `<text ${FamilyTree.attr.width}="150" style="font-size: 14px;" fill="#d1d1d1" x="10" y="65" text-anchor="start">{val}</text>`; // Слегка сероватый текст

FamilyTree.SEARCH_PLACEHOLDER = "Введите для поиска...";  // Здесь указывайте свой текст
    
FamilyTree.templates.tommy.link =
    `<path stroke="#686868" stroke-width="2px" fill="none" data-l-id="[{id}][{child-id}]" d="M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}" />`;





FamilyTree.templates.tommy.node = 
    `<rect x="0" y="0" height="{h}" width="{w}" stroke-width="1" fill="#a8a8a8" stroke="#d1d1d1" rx="7" ry="7"></rect>`; // Тёмный фон и сероватая рамка

FamilyTree.templates.tommy_male = Object.assign({}, FamilyTree.templates.tommy);
FamilyTree.templates.tommy_male.node = 
`<rect x="0" y="0" height="{h}" width="{w}" stroke-width="2" fill="url(#maleGradient)" stroke="#a8a8a8" rx="10" ry="10"></rect>
<defs>
    <linearGradient id="maleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#2e3b55;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1e293b;stop-opacity:1" />
    </linearGradient>
</defs>`;

FamilyTree.templates.tommy_female = Object.assign({}, FamilyTree.templates.tommy);
FamilyTree.templates.tommy_female.node = 
`<rect x="0" y="0" height="{h}" width="{w}" stroke-width="2" fill="url(#femaleGradient)" stroke="#a8a8a8" rx="10" ry="10"></rect>
<defs>
    <linearGradient id="femaleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#e0e0e0;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#bdbdbd;stop-opacity:1" />
    </linearGradient>
</defs>`;




    var family = new FamilyTree(document.getElementById("tree"), {
    mouseScrool: FamilyTree.action.none,
    toolbar: {
        zoom: true,
        fit: true,
    },
    template: "tommy", 
    mode: "dark",
    orientation: FamilyTree.orientation.left,
    enableDragDrop: false, 
    nodeMenu: false, 
    scaleInitial: FamilyTree.match.width,


    nodeBinding: {
        field_0: "name",
        img_0: "img"
    },
    menu: {
        pdf: { text: "Export PDF" },
        png: { text: "Export PNG" },
    },
    nodeMenu: {
        pdf: { text: "Export PDF" },
        png: { text: "Export PNG" },
    },
    editForm: {
        titleBinding: "name",
        photoBinding: "img",
        generateElementsFromFields: false,
        buttons: {
            edit: null,
            share: null,
            remove: null
        },
        elements: [
            { type: 'textbox', label: 'Full Name', binding: 'name' },
            { type: 'textbox', label: 'Last Name', binding: 'lstname' },
            [
                { type: 'date', label: 'Birth Date', binding: 'birthD' },
                { type: 'date', label: 'Death Date', binding: 'deathD' }
            ],
        ] 
    },

    nodes: [
        { id: 1, name: "Предок 1",lstname:"Fio proverka", gender: "male", img: "images/img1.jpg", about: "Описание 1" },
        { id: 2, fid: 1, name: "Сын 1", gender: "male", img: "images/img2.jpg", about: "Описание 2" },
        { id: 3, fid: 1, name: "Сын 2", gender: "male", img: "images/img3.jpg", about: "Описание 3" },
        { id: 4, fid: 2, name: "Внук 1", gender: "male", img: "images/img4.jpg", about: "Описание 4" },
        { id: 5, fid: 2, name: "Внук 2", gender: "male", img: "images/img5.jpg", about: "Описание 5" },
        { id: 6, fid: 3, name: "Внук 3", gender: "male", img: "images/img6.jpg", about: "Описание 6" },
    ]
});
