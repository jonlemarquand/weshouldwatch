

exports.getProgammeList = (req, res, next) => {
    console.log("req received")
    const tvData = [
        {
            "show" : "Game of Thrones",
            "releaseYears" : "2011-2019",
            "shortBio" : "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia."
        }, 
        {
            "show" : "The Bill",
            "releaseYears" : "1984 - 2010",
            "shortBio" : "Uniform officers and detectives from an inner London police station enforce law and order on a day to day basis."
        },
        {
            "show" : "Match of the Day",
            "releaseYears" : "2011 - 2019",
            "shortBio" : "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia."
        },
        {
            "show" : "Des",
            "releaseYears" : "2020",
            "shortBio" : "In 1983 Scottish serial killer Dennis Nilsen is arrested after the discovery of human remains which have blocked a drain near his London home."
        },
        {
            "show" : "Lorraine",
            "releaseYears" : "2010 - Present",
            "shortBio" : "Lorraine is a breakfast programme on British television network ITV, weekdays 9:00 am – 10:00 am (formerly 8:30 am – 9:25 am), presented by Lorraine Kelly. The programme is a continuation of Kelly's previous show, GMTV with Lorraine, which started in 1993."
        }]

    res.status(200).json(tvData)
}