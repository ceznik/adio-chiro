// var key = 'AIzaSyAuoDyUd1UVUigKWG0XbgNpCot-iQeLHKk';
// $("#newsLeft").empty();//

// $.ajax({
// 		  url: 'https://www.googleapis.com/customsearch/v1?q=' + 'back health' + '&cx=011101858926978562708%3Abyfxhjvymhs&key=' + key,
// 		  method: 'GET'
// 		}).done(function(response) {
// 		  //Gets 9 articles from response
// 		  for(var i = 1; i < 10; i++)
// 		  {
// 		   	//Stores object data of the articles
// 		    var currentStory = response.items[i];
// 		    //Stores data pulled from the page of the article
// 		    var currentStoryPagemap = response.items[i].pagemap;
// 		    //The all encompassing div that contains all data for a particular story
// 		    var newsDiv = $('<div>');
// 		    newsDiv.addClass('well');
// 		    //The title of the news story
// 		    var newsTitle = $('<h3>');
// 		    newsTitle.addClass('newsTitle');
// 		    newsTitle.html(currentStoryPagemap.article[0].name);
// 		    //Adds news title to the individual news story div
// 		    newsDiv.append(newsTitle);
// 		    //The article body. A snippet of the actual article. Will contain the thumbnail image in the p tag for formatting
// 				var newsBody = $('<p>');
// 				//Thumbnail image tag
// 		    var newsImg = $('<img>');
// 		    newsImg.attr('src', currentStoryPagemap.cse_thumbnail[0].src);
// 		    newsImg.addClass('newsPics');
// 		    newsBody.append(newsImg);
// 		    newsBody.addClass('articlebody');
// 		    newsBody.append(currentStoryPagemap.article[0].articlebody);
// 		    //Adds the body, containing snippet and image, to individual news story div
// 		    newsDiv.append(newsBody);
// 		    newsDiv.append('<br>');
// 		    //The link to the article on bleacherreport
// 		    var newsLink = $('<a>');
// 		    newsLink.addClass('newsLink');
// 		    newsLink.attr('href', currentStoryPagemap.article[0].url)
// 		    newsLink.html('read more');
// 		    //Appends the link to the individual news story div
// 		    newsDiv.append(newsLink);
// 		    //Date the article was published
// 		    var datePub = $('<p>');
//        datePub.addClass('datePub');
//        datePub.html("Date: " +currentStoryPagemap.article[0].datepublished);
//        //Appends date to news story div
//        newsDiv.append(datePub);
//        //Displays news stories horizontally, 3 per row
// 		    if(i == 1 || i == 4 || i == 7)
// 		    {
// 		      $('#newsLeft').append(newsDiv);
// 		    }
// 		    if(i == 2 || i == 5 || i == 8)
// 		    {
// 		      $('#newsCenter').append(newsDiv);
// 		    }
// 		    if(i == 3 || i == 6 || i == 9)
// 		    {
// 		      $('#newsRight').append(newsDiv);
// 		    }
// 		  }
// 		});	
// 		return false;		//will keep results and not auto refresh
// 	});