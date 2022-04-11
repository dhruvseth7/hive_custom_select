# Hive Custom Select

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, run the following commands in order:

### `npm install`

Installs all dependencies and modules

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## About the Codebase

The root file for the application is `App.js` in the **src** directory. Multiple Dropdown Menu components can be instantiated in this file.

The Reusable Menu Component is defined in `Select.jsx` in the **src/components** directory. The Select Component takes in a few key parameters outlined below:

### `label (required)`

String label for dropdown menu

### `type (required)`

Either "multi" or "single" for multi or single select respectively. Note: For multiselect dropdowns, a **All** checkbox is rendered at the top of the list which will select/deselect all options when clicked. For singleselect dropdowns, a **None** checkbox is render which will deselect the currently selected option

### `options (required)`

An array of string values where each element is a unique selectable option for the dropdown menu

### `placeholder (optional)`

Optional placeholder field that is displayed on the menu button when no options are selected. Default string is displayed if this prop is empty

### Example

```
<Select
  label="Age"
  type="single"
  options={["13-18", "18-21", "21-30", "30-40", "40-65", "65+"]}
  placeholder="Please input your age"
/>

```

## Screenshot

![alt text](/public/dropdown.png)
