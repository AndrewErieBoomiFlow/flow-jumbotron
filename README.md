# Flow Jumbotron
Makes it easy to add a Jumbotron (Hero) to your flows

1. Add input type component to a page. Through the pages meta data edit the "componentType" property to "fileInputBox"
2. Create a new player and copy and paste the html player file from the repo or use the following:

```
var manywho = {
            cdnUrl: 'https://assets.manywho.com',
            customResources: [
                'https://s3.amazonaws.com/files-manywho-com/395cd7c0-bc6c-4270-a44a-d6d2b53007bf/components/flow-jumbotron.js'
            ],
            initialize: function () {
				...
       		}
		};
```


###### Attributes

- background_image
- text_color
- text_align
- button_text
- button_link
- button_style