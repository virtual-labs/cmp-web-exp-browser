# cmp-web-exp-browser
## How to use
### 1. npm install cmp-web-exp-browser
### 2. import Exp_Card from 'cmp-web-exp-browser' in your js file
### 3. parameters to be given as JSON. like 
### {
###         exp_name: 'Experiment Name',
###         collage: 'Collage',
###         exp_link: 'Link to the experiment',
###         exp_img: '',
###         collage_img: '',
###         card_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.',
###         rating: '4.5',
###         modal_content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.',
###         tags:["tag1 ","tag2","tag3"],
###         domain:'Domain',
###         lab:'Lab',
###         saved: true/false,
### }
### 4. This json parameter should be passed with the name 'UserData'
### 5. Another parameter is a callback function named 'onValueChange', which takes single parameter. The value of this parameter will be true or false according to saved or not saved.
### 6. For example -: define a usestate variable
### const [saved,setsaved] = useState(false)
### Then define a function
### function on_savedvalue_change(value){setsaved(value);}. 
### Then use the component like 
### <Exp_Card UserData={UserData} onValueChange={on_savedvalue_change}/>.
### now 'saved' hook will be true if exp is saved else it will be false.
### 7. Another parameter is a also callback function named 'onclickinglink', which takes single parameter. This parameter is the link of experiment. What action is to be performed can be on clicking exp_name can be defined in this function. 
### 8. For example -: define a function
### function open_link(value)
### {
###   window.open(value)
### }
### Then use the component like 
### <Exp_Card UserData={UserData}  onValueChange={on_savedvalue_change} onclickinglink = {open_link/>.
### now on clicking the exp_name the function 'open_link' will be called

## How to publish new version
### 1. Change version in package.json
### 2. npm run build
### 3. npm login
### 4. npm publish
