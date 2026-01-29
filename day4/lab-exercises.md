# JavaScript BOM & DOM Lab Exercises

## Exercise 1: Screen Information Display
Create a function that displays the following screen information in the console:
- Screen width and height
- Available screen width and height
- Color depth

- Display this information on the webpage instead of just the console.

---

## Exercise 2: Browser Navigator Info
Create a function `checkBrowserInfo()` that:
- Logs the user's browser type (userAgent)
- Checks if the user is online or offline
- Displays the browser's language
- Alerts the user if cookies are disabled

---

## Exercise 3: URL Manipulator
Create three buttons:
1. **"Show Current URL"** - Displays the current page URL in an alert
2. **"Reload Page"** - Reloads the current page
3. **"Go to Wikipedia"** - Redirects to https://www.wikipedia.org

Use the `location` object for all operations.

---

## Exercise 4: Dynamic Content Modifier
Create a webpage with:
- A paragraph with id `"description"` containing some initial text
- An input field with id `"new-text"`
- A button that changes the paragraph's text to whatever is in the input field
- Another button that toggles a CSS class `"highlight"` on the paragraph (create CSS for this class with a yellow background)

---

## Exercise 5: Attribute Manager
Create a form with:
- An input field with id `"user-input"`
- you should select the input field using `querySelector(**attribute selector**)`
- Three buttons:
  1. **"Make Password"** - Changes input type to password
  2. **"Make Text"** - Changes input type to text
  3. **"Make Email"** - Changes input type to email

Use `setAttribute()` and `getAttribute()` methods.

---

## Exercise 6: Multi-Element Selector
Create a webpage with multiple buttons (at least 5) with the class `"action-btn"`.
Write a function that:
- Selects all buttons with class `"action-btn"`
- Changes the text of the first button to "First"
- Changes the text of the last button to "Last"
- **BONUS** Changes the background color of all middle buttons to lightblue

---

## 🌟 BONUS Exercise 7: Window Controller
Create a complete window management system:
- A button to open a new window (about.html) with specific dimensions (400x400)
- A button to close the opened window
- A button to move the window to position (100, 100)
- A button to resize the window to 800x600
- Display a message if the window is already closed and user tries to interact with it

**Challenge:** Keep track of the window state and disable/enable buttons accordingly.

---

## 🌟 BONUS Exercise 8: DOM Tree Explorer
Create an interactive DOM tree explorer:
- Create a section with nested elements (div > ul > li > span, etc.)
- Create buttons that allow users to:
  1. View all child nodes of a selected element
  2. View only child elements (not text nodes)
  3. Navigate to parent element
  4. Navigate to next sibling
  5. Navigate to previous sibling
- Display the current element's tag name, class names, and id
- Highlight the currently selected element with a border

---

