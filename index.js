// index.js
var my_code_club_default = {
   fetch(request) {
       //if(request.url == "https://code-club.dgilmore-lab.workers.dev/") {
       //    return new Response('Hello worker!', {
       //        headers: {
       //            'content-type': 'text/plain',
       //        },
       //    });
       //}
       if(request.method == 'POST') {
           return new Response('Hello worker! Method: POST', {
               headers: {
                   'content-type': 'text/plain',
               },
           });
       }
       else{
           return new Response('Error Worker!', {
               headers: {
                   'content-type': 'text/plain',
               },
           });
       }
   },
};

export {
  my_code_club_default as default
};
//# sourceMappingURL=index.js.map
