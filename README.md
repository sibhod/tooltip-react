# Tooltip React

A simple React tooltip component, to complete the OpenSpace [coding challenge](https://gist.github.com/robcmills/4bf674533c37a9124ab643f281f9a223).
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Future improvements

Adding a "direction" optional prop to `Tooltip` could be added simply with a `switch` inside `setPositionFromBounds` to determine the dynamic inlined position styles, and appending the direction to the `className` (e.g. "tooltip.left"), with some additional CSS for each possible direction.
