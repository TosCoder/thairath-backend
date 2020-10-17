const service = {}
const axios = require('axios');

service.getAll = async () => {
        try {
            const res = axios.get('https://www.instagram.com/thairath/?__a=1')
            .then((response) => {

              const responseNews = response.data.graphql.user
              const responseNewsIGTV = responseNews.edge_felix_video_timeline
              const responseNewsPost = responseNews.edge_owner_to_timeline_media
        
              const newData = {
                 name: responseNews.full_name,
                 image_profile: responseNews.profile_pic_url,
                 image_profile_hd: responseNews.profile_pic_url_hd,
                 newsPost: { 
                     count: responseNewsPost.count,
                     edges: responseNewsPost.edges.map(item => {
                         return (
                             {
                                 _id: item.node.id,
                                 display: item.node.display_url,
                                 title: item.node.title ,
                                 type: item.node.product_type || 'post',
                                 caption: item.node.edge_media_to_caption.edges,
                                 thumbnail_src: item.node.thumbnail_src,
                                 thumbnail_resources: item.node.thumbnail_resources
                             }
                         )
                     })
                 },
                newsIGTV: { 
                     count: responseNewsIGTV.count,
                     edges: responseNewsIGTV.edges.map(item => {
                         return (
                             {
                                 _id: item.node.id,
                                 display: item.node.display_url,
                                 title: item.node.title,
                                 type: item.node.product_type,
                                 caption: item.node.edge_media_to_caption.edges,
                                 thumbnail_src: item.node.thumbnail_src,
                                 thumbnail_resources: item.node.thumbnail_resources
                             }
                         )
                     })
                 }
              }
        
             return newData
            })

            return res

        }
        catch(err) {
            return err 
        }
}


module.exports = service;