import React from 'react';
import Img from 'react-image';
import VisibilitySensor from 'react-visibility-sensor';
import "./Detail.css"

class Detail extends React.Component {
    componentDidMount() {

        const { location, history} = this.props;
        console.log(location);
        console.log(history);
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const {location} = this.props;
        
        if(location.state) {    
            return (<>
            <div className="detail" >  
                <div  >
                    <VisibilitySensor>             
                        <Img 
                        src={location.state.poster_detail} alt={location.state.title} title={location.state.title}
                        loader={<div className ="detail_poster_holder">Loading...</div>}
                        />
                     </VisibilitySensor> 
                </div>
                <div className="detail_description">
                    <h1 className="movie_title">{location.state.title}</h1>
                    <h3 className="movie_year">{location.state.year}</h3>
                    <ul className="movie_genres">
                        {location.state.genres.map((genre,index) => (
                            <li key={index} className="genres_genre">
                                {genre}
                            </li>
                        ))}
                    </ul>
                    <div className="movie_summary">{location.state.summary}</div>
                </div>                
            </div>
            
            </>
            );
        } else {
            return null;
        }
    }

}

export default Detail;