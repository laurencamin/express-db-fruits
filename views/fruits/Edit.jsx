const React = require("react")
const DefaultLayout = require("../layout/Default")

class Edit extends React.Component {
    render() {
        const fruit = this.props.fruit;
        return (
         <DefaultLayout
            title="Edit Page"
            // 2 properties below are for the Nav component
            link="/fruits"
            text="Home"
            >
              <form action={`/fruits/${fruit._id}?_method=PUT`} method="POST" >

             Name: <input type="text" name="name" defaultValue={fruit.name} />
               Color: <input type="text" name="color" defaultValue={fruit.color} />
               Is Ready to Eat:
             {
                fruit.readyToEat?
                 <input type="checkbox" name="readyToEat" defaultChecked />
                 :
                 <input type="checkbox" name="readyToEat" />
             }
              <input type="submit" value="Submit Changes" />
              </form>
            </DefaultLayout>
             
        )
    }
}

module.exports = Edit