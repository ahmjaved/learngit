
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {images: []};

    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/serch/photos',{
            params : { query:term},
            headers: {
                Authorization:
                'Cliet-ID   '
            }
        });
        console.log(response.data.results);
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
}