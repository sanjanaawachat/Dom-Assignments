//que5

5.//What’s the difference between window vs document?

//Ans
//------------------Document----------------------------------------------------------------------------------------------
//Document Object: The document object represent a web page that is loaded in the browser. 
// By accessing the document object, we can access the element in the HTML page. 
// With the help of document objects, we can add dynamic content to our web page. 
// The document object can be accessed with a window.document or just document.

// It represents any HTML document or web page that is loaded in the browser.
// It is loaded inside the window.
// It is the object of window property.
// All the tags, elements with attributes in HTML are part of the document.
// We can access the document from a window using the window. document
// The document is part of BOM (browser object model) and dom (Document object model)
// Properties of document objects such as title, body, cookies, etc can also be accessed by a window like this window. document.title
//document.property_name;
//document.method_name;
//--------------------Window----------------------------------------------------------------------------------------------
//Window Object: The window object is the topmost object of the DOM hierarchy. 
// It represents a browser window or frame that displays the contents of the webpage. 
// Whenever a window appears on the screen to display the contents of the document, the window object is created. 

// It represents a browser window or frame that displays the contents of the webpage.
// It is the very first object that is loaded in the browser.
// It is the object of the browser.
// Global objects, functions, and variables of JavaScript are members of the window object.
// We can access the window from the window only. i.e. window.window
// The window is part of BOM, not DOM.
// Properties of the window object cannot be accessed by the document object.
//window.property_name;
//window.method_name;
