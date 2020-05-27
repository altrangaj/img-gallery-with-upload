# The Image Gallery With Upload Feature
Stores images to MongoDB utilizing multer. This solution is easy to extend to uploading multiple files at once. **_Todo: 1. gridFS for bigger than 16Mb pics. 2. elegant navigation for overflowed images. For example, using react-spring transition (no white scroll bars!)_**

## Prerequisites

npm package manager and mongodb uri

## Installing
```
/img-gallery-with-upload/server>npm install
/img-gallery-with-upload/client>npm install
```
create `.env` file with content:
```
    MONGODB_URI=mongodb://localhost/items
    PORT=8000
    NODE_ENV=test
```
__option A__ usage in production mode:
build and run
```
/img-gallery-with-upload/client>npm run build
/img-gallery-with-upload/client>cp -r build ../server
/img-gallery-with-upload/server>npm start
```
and open http://localhost:8000/ in browser. ___Now folder ./server has all what you need to deploy this on a live system___

__option B__ usage in development mode:
```
/img-gallery-with-upload/server>npm run dev
/img-gallery-with-upload/client>npm run dev
```

what it looks like:
![kuvagalleria](https://raw.githubusercontent.com/altrangaj/img-gallery-with-upload/master/IGCapture.PNG)

#### Running sample [in Heroku](https://itemgallery.herokuapp.com/). Please note that it works with free platforms or services. With paid features, it could work faster. (MongoDB Atlas and Heroku)
