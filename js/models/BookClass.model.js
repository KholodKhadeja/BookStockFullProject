class Book{
    name;
    price;
    author;
    imgUrl;
    realeseDate;
    keywords;
    id;
    constructor(name,price,author,imgUrl,realeseDate,keywords=[],id){
        this.name=name;
        this.price=price;
        this.author=author;
        this.imgUrl=imgUrl;
        this.realeseDate=realeseDate;
        this.keywords=keywords;
        this.id=id;
    }
}