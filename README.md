# Flow Jumbotron
Makes it easy to add a Jumbotron (Hero) to your flows

1. Add input type component to a page. Through the pages meta data edit the "componentType" property to "flowjumbotron"
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

| Attribute     	| Notes         |
| ------------- 	|:-------------:|
| background_image  | URL: jpg, png	|
| text_color      	| #hex or RGB	|
| text_align	 	| left, right, center |
| button_text	 	| String   		|
| button_link	 	| External Link |

[Demo Flow](https://flow.manywho.com/395cd7c0-bc6c-4270-a44a-d6d2b53007bf/play/FlowJumboTest?flow-id=92d2ddcc-a512-493a-a725-37b70b12a87e&flow-version-id=4000fa6f-db79-4193-a923-179a0119aff4)