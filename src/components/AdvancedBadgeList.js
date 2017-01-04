import React, { Component } from 'react';


class BadgeList extends Component {

  render(){
    const searchTagsArray = [];
    const creatorArray = [];

    if (this.props.searchValue.length >= 3) {

      let filterTags = this.props.tagArray.filter(
        (tag) => {
          if (tag.includes(this.props.searchValue.toLowerCase())) {
            searchTagsArray.push(tag);
            searchTagsArray.sort();
          }
        }
      );

      let filterCreators = this.props.badgeArray.filter(
        (badge) => {
          // console.log(badge.creator);
          if(badge.creator.toLowerCase().includes(this.props.searchValue.toLowerCase()) && !creatorArray.includes(badge.creator)) {
            creatorArray.push(badge.creator);
            creatorArray.sort();
          }
        }
      )

    }

      let filteredByTagsArrayBadges = this.props.badgeArray.filter(
        (badge) => {
          for (var i = 0; i < searchTagsArray.length; i++) {
            if (badge['tags'].toLowerCase().includes(searchTagsArray[i].toLowerCase())) {
              return badge['tags'].toLowerCase().includes(searchTagsArray[i].toLowerCase());
            }
          }

        }
      );

      let filteredByCreatorBadges = this.props.badgeArray.filter(
        (badge) => {
          for (var i = 0; i < creatorArray.length; i++) {
            if (badge['creator'].toLowerCase().includes(creatorArray[i].toLowerCase())) {
              return badge['creator'].toLowerCase().includes(creatorArray[i].toLowerCase());
            }
          }
        }
      );

      let filteredByNameBadges = this.props.badgeArray.filter(
        (badge) => {
          return badge["name"].toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1;
        }
      );


        let displayName;
        if (this.props.nameCheckBox && this.props.searchValue.length >= 3) {
          displayName = (
            <div>
              <h2>Search Results by Badge Name</h2>
              <hr/>
              {
                //map over filteredBadges to display list of everything from the database, or whatever the user is filtering with their search term.
                filteredByNameBadges.map((badge, idx) => {
                  return(
                    <div key={idx}>
                      <ul>
                        <li className='hover-hand' onClick={() => this.props.goToBadge(badge)}>
                          <img className='list-image' src={badge.imageUrl} alt={badge.name}></img>
                          <a>
                          Activity: {badge.name} <br />
                          Creator: {badge.creator}
                          </a>
                        </li>
                      </ul>
                    </div>
                  );
                })
              }
            </div>
          )
        }

        let displayKeywords;
        if (this.props.keywordsCheckBox && this.props.searchValue.length >= 3) {
          displayKeywords = (
            <div>
              <h2>Search By Keywords</h2>
              <hr></hr>
              {
                searchTagsArray.map((tag, idx) =>{
                  return(
                    <div key={idx}>
                      <h4>Keyword: {tag}</h4>
                      <hr></hr>
                      {
                        //map over filterTags to display list of everything from the database, or whatever the user is filtering with their search term.
                        filteredByTagsArrayBadges.map((badge, idx) => {
                          let badgeTagsArray = badge.tags.split(',');

                          if (badgeTagsArray.includes(tag)) {

                            return(
                              <div key={idx}>
                                <ul>
                                  <li className='hover-hand' onClick={() => this.props.goToBadge(badge, this.props.searchValue)}>
                                    <img className='list-image' src={badge.imageUrl} alt={badge.name}></img>
                                    <a>
                                      {badge.name} <br/>
                                      {badge.tags}
                                    </a>
                                    <hr/>
                                  </li>
                                </ul>
                              </div>
                            );
                          }
                        })
                      }
                    </div>
                  );
                })
              }
            </div>
          ) //close variable
        } //close if statement

        let displayCreator;
        if (this.props.creatorCheckBox && this.props.searchValue.length >= 3) {
          displayCreator = (
            <div>
              <h2>Search By Creator</h2>
              <hr></hr>
              {
                creatorArray.map((creator, idx) =>{
                  return(
                    <div key={idx}>
                      <h4>creator: {creator}</h4>
                      <hr></hr>
                      {
                        //map over filterTags to display list of everything from the database, or whatever the user is filtering with their search term.
                        filteredByCreatorBadges.map((badge, idx) => {
                          let badgeCreator = badge.creator;

                          if (badgeCreator.includes(creator)) {

                            return(
                              <div key={idx}>
                                <ul>
                                  <li className='hover-hand' onClick={() => this.props.goToBadge(badge, this.props.searchValue)}>
                                    <img className='list-image' src={badge.imageUrl} alt={badge.name}></img>
                                    <a>
                                      {badge.name} <br/>
                                      {badge.tags}
                                    </a>
                                    <hr/>
                                  </li>
                                </ul>
                              </div>
                            );
                          }
                        })
                      }
                    </div>
                  );
                })
              }
            </div>
          ) //close variable
        } //close if statement

    return(
      <div>
          {displayName}
          {displayKeywords}
          {displayCreator}

      </div>
    );
  }
}

BadgeList.PropTypes = {
  badgeArray: React.PropTypes.array.isRequired,
  goToBadge: React.PropTypes.func.isRequired
};

export default BadgeList;
