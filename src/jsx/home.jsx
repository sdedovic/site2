var FilterableProductTable = React.createClass({
    render: function() {
        return (
            <div className="well clearfix">
                <h3>Log In</h3>
                <form>
                    <input type="email" className="form-control" id="email" placeholder="Email"/>
                    <br/>
                    <input type="password" className="form-control" id="pass" placeholder="Password"/>
                    <br/>
                    <button type="submit" class="btn btn-default">Submit</button>
                    <a href="#"> Register</a>
                </form>
            </div>
        );
    }
});

React.render(<FilterableProductTable/>, document.getElementById('login-react'));