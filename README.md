# Limit Text jQuery Plugin
This jQuery plugin will truncate text to a specified number of characters without splitting a word in half.

### Example one:
```javascript
// Default 100 characters and an "..." ellipis
$('#example-1').limitText();
```

### Example two:
```javascript
// Customized and chained
$('#example-2').limitText({
    length:65,
    ellipsisText: '[...]'})
.css('color', '#800000');
```
