

# The purpose of this project is solely for playing around with React.

## Problems:

The most challenging part of the process was propagating the Section component's  onClick function up
to the Main component. It took a lot of experimenting to get to the other side of the bridge.

### Problem #1:

```javascript
<li className="category" onClick={this.renderSection.bind("home")}>Home</li>
```

subsequent error message: React component methods may only be bound to the component instance

### Solution:

```javascript
<li className="category" onClick={this.renderSection.bind(this,"home")}>Home</li>
```
### Problem #2:

The code below triggered an infinite loop, ultimately halting development time for a few days. Hello 429!
By the way, the hardcoded string was for test purposes. DUH! :stuck_out_tongue:

```javascript
handleSwitch: function(selection){
  this.setState({section: "world", this.loadData)
}
```
subsequent error message:
Warning: setState(...) cannot update during an existing state transition

### Solution:
I had to reach out to the NYT development team, to inform them that I was not using the api for commercial use, and that it was a harmless infinite loop that caused the huge spike in api calls. FYI:  The NYT API is limited to 1K calls per day, and 5 calls per second. The infinite loop looped over 14,000 times. YIKES!!!

```javascript
   handleSwitch: function(e){
    this.setState({section: `${e}`, this.loadData)
   }
```

### Problem #3:
The developer console displayed the updated section state, but the new articles corresponding to the section did not appear. Upon further inspection, it was pretty obvious that the new articles were being
appended to the existing array.

```javascript
   this.setState({section: `${e}`, this.loadData)
```
### Solution:
I cleared the existing array to populate the section's corresponding articles.

```javascript
  this.setState({articles: [], section: `${e}`}, this.loadData)
```
#### TODOS

* Change to ES6 syntax
* Create container components
* Add Old English font
* Fix styling
* Add pagination
* Add accordion functionality to Article component
* Final step: transition to redux
