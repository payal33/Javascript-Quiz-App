let jsQuestions = [
        {
            question: "Why so JavaScript and Java have similar name?",
            choice1: "JavaScript is a stripped-down version of Java",
            choice2: "JavaScript's syntax is loosely based on Java's",
            choice3: "They both originated on the island of Java",
            choice4: "None of the above",
            answer: 2
        },
        {
            question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
            choice1: "The User's machine running a Web browser",
            choice2: "The Web server",
            choice3: "A central machine deep within Netscape's corporate offices",
            choice4: "None of the above",
            answer: 1
        },
        {
            question: " ______ JavaScript is also called client-side JavaScript.",
            choice1: "Microsoft",
            choice2: "Navigator",
            choice3: "LiveWire",
            choice4: "Native",
            answer: 2
        },
        {
            question: "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
            choice1: "Client-side",
            choice2: "Server-side",
            choice3: "Local",
            choice4: "Native",
            answer: 1
        },
        {
            question: "How does JavaScript store dates in a date object?",
            choice1: "The number of milliseconds since January 1st, 1970",
            choice2: "The number of days since January 1st, 1900",
            choice3: "The number of seconds since Netscape's public stock offering.",
            choice4: "None of the above",
            answer: 1
        },
        {
            question: "What is the correct JavaScript syntax to write \"Hello World\"?",
            choice1: "System.out.println(\"Hello World\")",
            choice2: "println (\"Hello World\")",
            choice3: "document.write(\"Hello World\")",
            choice4: "response.write(\"Hello World\")",
            answer: 3
        },
        {
            question: "Which of the following way can be used to indicate the LANGUAGE attribute?",
            choice1: '<LANGUAGE="JavaScriptVersion">',
            choice2: '<SCRIPT LANGUAGE="JavaScriptVersion">',
            choice3: '<SCRIPT LANGUAGE="JavaScriptVersion">JavaScript statements…</SCRIPT>',
            choice4: '<SCRIPT LANGUAGE="JavaScriptVersion"!>JavaScript statements…</SCRIPT>',
            answer: 3
        },
        {
            question: "Choose the correct JavaScript syntax to change the content of the following HTML code.",
            choice1: 'document.getElement (“letsfindcourse”).innerHTML = ”I am a letsfindcourse”;',
            choice2: 'document.getElementById (“letsfindcourse”).innerHTML = ”I am a letsfindcourse”;',
            choice3: 'document.getId (“letsfindcourse”) = ”I am a letsfindcourse”;',
            choice4: 'document.getElementById (“letsfindcourse”).innerHTML = I am a letsfindcourse;',
            answer: 2
        },
        {
            question: "Which of the following is not Javascript frameworks or libraries?",
            choice1: 'Polymer',
            choice2: 'Meteor',
            choice3: 'Cassandra',
            choice4: 'jQuery',
            answer: 3
        },
        {
            question: "Among the keywords below, which one is not a statement?",
            choice1: 'if',
            choice2: 'with',
            choice3: 'debugger',
            choice4: 'use strict',
            answer: 4
        },
        {
            question: "What is defination of an undefined value in JavaScript?",
            choice1: "Variable used in the code doesn't exist",
            choice2: 'Variable is not assigned to any value',
            choice3: "Property doesn't exist",
            choice4: 'All of the above',
            answer: 4
        },
        {
            question: "What is the disadvantage of using innerHTML in JavaScript?",
            choice1: 'Content can not be replaced everywhere',
            choice2: 'Even if you use +=like "innerHTML = innerHTML + \'html\'" still the old content is replaced by html',
            choice3: 'We can use like "appending to innerHTML"',
            choice4: 'The entire innerHTML content is not re-parsed and build into elements, therefore its not slower',
            answer: 2
        },
        {
            question: "Which of the following are the functional components in JavaScript?",
            choice1: 'First-class functions',
            choice2: 'Encapsulated-class functions',
            choice3: 'Fixed-class functions',
            choice4: 'All of the above',
            answer: 3
        },
        {
            question: "Which of the following is not the properties of screen objects in JavaScript?",
            choice1: 'AvailHeight',
            choice2: 'ColorsDepth',
            choice3: 'AvailWidth',
            choice4: 'ColorDepth',
            answer: 2
        },
        {
            question: "Which is the handler method used to invoke when uncaught JavaScript exceptions occur?",
            choice1: 'Onhalt',
            choice2: 'OnError',
            choice3: 'Both (A) and (B)',
            choice4: 'Onsuspend',
            answer: 3
        }
    ]


let  htmlQuestions = [
        {
            question: "Apart from <b> tag, what other tag makes text bold?",
            choice1: "<fat>",
            choice2: "<strong>",
            choice3: "<black>",
            choice4: "<emp>",
            answer: 2 
        },
        {
            question: "From which tag descriptive list starts ?",
            choice1: "<LL>",
            choice2: "<DD>",
            choice3: "<DL>",
            choice4: "<DS>",
            answer: 3
        },
        {
            question: "The attribute of <form> tag",
            choice1: "Method",
            choice2: "Action",
            choice3: "Both (a) and (b)",
            choice4: "None of these",
            answer: 3
        },
        {
            question: "Markup tags tell the web browser",
            choice1: "How to organise the page",
            choice2: "How to display the page",
            choice3: "How to display message box on page",
            choice4: "None of these",
            answer: 2
        },
        {
            question: "www is based on which model?",
            choice1: "Local-server",
            choice2: "Client-server",
            choice3: "3-tier",
            choice4: "None of these",
            answer: 2
        },
        {
            question: "Which of the following attributes of text box control allow to limit the maximum character?",
            choice1: "size",
            choice2: "len",
            choice3: "maxlength",
            choice4: "All of these",
            answer: 3
        },
        {
            question: "Web pages starts with which ofthe following tag?",
            choice1: "<body>",
            choice2: "<title>",
            choice3: "<form>",
            choice4: "<html>",
            answer: 4
        },
        {
            question: "HTML is a subset of",
            choice1: "SGMT",
            choice2: "SGML",
            choice3: "SGMD",
            choice4: "None of these",
            answer: 2
        },
        {
            question: "Which of the following is a container?",
            choice1: "<select>",
            choice2: "<body>",
            choice3: "<input>",
            choice4: "Both (a) and (b)",
            answer: 4
        },
        {
            question: "The attribute, which define the relationship between current document and HREF'ed URL is",
            choice1: "REL",
            choice2: "URL",
            choice3: "REV",
            choice4: "All of these",
            answer: 1
        },
        {
            question: "The web standard allows programmers on many different computer platforms to dispersed format and display the information server. These programs are called",
            choice1: "Web Browsers",
            choice2: "HTML",
            choice3: "Internet Exxplorer",
            choice4: "None of these",
            answer: 1
        },
        {
            question: "Which tag allows you to add a row in a table",
            choice1: "<td> and </td>",
            choice2: ">cr> and </cr>",
            choice3: "<th> and </th>",
            choice4: "<tr> and </tr>",
            answer: 4
        },
        {
            question: "How can you make an email link",
            choice1: "<a href='xxx@yyy'",
            choice2: "<mail href='xxx@yyy'",
            choice3: "<mail>xxx@yyy</mail>",
            choice4: "<a href='mailto:xxx@yyy'",
            answer: 4
        },
        {
            question: "What is the correct HTML for adding a background color",
            choice1: "<body color='yellow'",
            choice2: "<body bgcolor='yellow'",
            choice3: "<background>yellow</background>",
            choice4: "<body background='yellow'",
            answer: 2
        },
        {
            question: "What does vlink attribute mean",
            choice1: "visited link",
            choice2: "virtual link",
            choice3: "very good link",
            choice4: "active link",
            answer: 1
        },
    ]


let cssQuestions = [
    {
        question: "If we want define style for an unique element, then which css selector will we use ?",
        choice1: "Id",
        choice2: "text",
        choice3: "class",
        choice4: "name",
        answer: 1
    },
    {
        question: "If we don't want to allow a floating div to the left side of an element, which css property will we use ?",
        choice1: "margin",
        choice2: "clear",
        choice3: "float",
        choice4: "padding",
        answer: 2
    },
    {
        question: "Suppose we want to arragnge five nos. of DIVs so that DIV4 is placed above DIV1. Now, which css property will we use to control the order of stack?",
        choice1: "d-index",
        choice2: "s-index",
        choice3: "x-index",
        choice4: "z-index",
        answer: 4
    },
    {
        question: "If we want to wrap a block of text around an image, which css property will we use ?",
        choice1: "wrap",
        choice2: "push",
        choice3: "float",
        choice4: "align",
        answer: 3 
    },
    {
        question: "If we want to show an Arrow as cursor, then which value we will use ?",
        choice1: "pointer",
        choice2: "default",
        choice3: "arrow",
        choice4: "arr",
        answer: 2
    },
    {
        question: "Which of the following properties will we use to display border around a cell without any content ?",
        choice1: "empty-cell",
        choice2: "blank-cell",
        choice3: "noncontent-cell",
        choice4: "void-cell",
        answer: 1
    },
    {
        question: "What should be the table width, so that the width of a table adjust to the current width of the browser window?",
        choice1: "640 pixels",
        choice2: "100%",
        choice3: "full-screen",
        choice4: "1024px",
        answer: 2 
    },
    {
        question: 'When we write <img src="img.png">, what "img.png" inside double quote implies?',
        choice1: "element",
        choice2: "attribute",
        choice3: "value",
        choice4: "operator",
        answer: 3
    },
    {
        question: "Which css property you will use if you want to add some margin between a DIV's border and its inner text ?",
        choice1: "spacing",
        choice2: "margin",
        choice3: "padding",
        choice4: "inner-margin",
        answer: 3
    },
    {
        question: 'The default value of "position" attribute is _________.',
        choice1: "fixed",
        choice2: "absolute",
        choice3: "inherit",
        choice4: "relative",
        answer: 4
    },
    {
        question: "Which CSS property is used to control the text size of an element ?",
        choice1: "font-size",
        choice2: "font-style",
        choice3: "text-size",
        choice4: "text-style",
        answer: 1
    },
    {
        question: "How will you make all paragraph elements 'RED' in color ?",
        choice1: "p.all {color: red;}",
        choice2: "p.all {color: #990000;}",
        choice3: "all.p {color: #998877;}",
        choice4: "p {color: red;}",
        answer: 4
    },
    {
        question: "By default Hyperlinks are displayed with an underline. How do you remove the underline from all hyperlinks by using CSS code ?",
        choice1: "a {text: no-underline;}",
        choice2: "a {text-decoration:none;}",
        choice3: "a {text-style: no-underline;}",
        choice4: "a {text-decoration: no-underline;}",
        answer: 2
    },

    {
        question: "Which attribute can be added to many HTML / XHTML elements to identify them as a member of a specific group ?",
        choice1: "Id",
        choice2: "div",
        choice3: "class",
        choice4: "span",
        answer: 3
    },
    {
        question: "If we want to use a nice looking green dotted border around an image, which css property will we use?",
        choice1: "border-color",
        choice2: "border-decoration",
        choice3: "border-style",
        choice4: "border-line",
        answer: 3
    },
    {
        question: "Which of the following selector selects the elements that are checked?",
        choice1: "E ~ F",
        choice2: "::after",
        choice3: ":checked",
        choice4: "None of these",
        answer: 3
    },

]

    export{jsQuestions,htmlQuestions,cssQuestions};
