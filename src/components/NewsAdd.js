import React,{Component} from 'react';
export default class NewsAdd extends Component{
    handleSubmit=()=>{
        let title=this.title.value;
        let contents=this.contents.value;
        let newsStr=localStorage.getItem('news');
        let news=newsStr?JSON.parse(newsStr):[];
        news.push({id:Date.now(),title, contents});
        localStorage.setItem('news',JSON.stringify(news));
        this.props.history.push('/blog/news');
        //this.props.history.goBack();
    }
    render(){
        return (
            <form action="" onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" className="form-control" ref={input=>this.title=input} />
                </div>
                <div className="form-group">
                    <label htmlFor="contents">Contents</label>
                    <textarea className="form-control" name="contents" ref={input=>this.contents=input} />
                </div>
                <div className="form-group">
                   <input type="submit" className="btn btn-primary pull-right" value="send"/>
                </div>
            </form>
        )

    }

}