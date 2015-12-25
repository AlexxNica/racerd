(function() {var implementors = {};
implementors['iron'] = [];implementors['persistent'] = ["impl&lt;P: <a class='trait' href='typemap/trait.Key.html' title='typemap::Key'>Key</a>&gt; <a class='trait' href='iron/middleware/trait.BeforeMiddleware.html' title='iron::middleware::BeforeMiddleware'>BeforeMiddleware</a> for <a class='struct' href='persistent/struct.State.html' title='persistent::State'>State</a>&lt;P&gt; <span class='where'>where P::Value: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>","impl&lt;P: <a class='trait' href='typemap/trait.Key.html' title='typemap::Key'>Key</a>&gt; <a class='trait' href='iron/middleware/trait.BeforeMiddleware.html' title='iron::middleware::BeforeMiddleware'>BeforeMiddleware</a> for <a class='struct' href='persistent/struct.Read.html' title='persistent::Read'>Read</a>&lt;P&gt; <span class='where'>where P::Value: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html' title='core::marker::Sync'>Sync</a></span>","impl&lt;P: <a class='trait' href='typemap/trait.Key.html' title='typemap::Key'>Key</a>&gt; <a class='trait' href='iron/middleware/trait.BeforeMiddleware.html' title='iron::middleware::BeforeMiddleware'>BeforeMiddleware</a> for <a class='struct' href='persistent/struct.Write.html' title='persistent::Write'>Write</a>&lt;P&gt; <span class='where'>where P::Value: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a></span>",];implementors['logger'] = ["impl <a class='trait' href='iron/middleware/trait.BeforeMiddleware.html' title='iron::middleware::BeforeMiddleware'>BeforeMiddleware</a> for <a class='struct' href='logger/struct.Logger.html' title='logger::Logger'>Logger</a>",];implementors['iron_hmac'] = ["impl <a class='trait' href='iron/middleware/trait.BeforeMiddleware.html' title='iron::middleware::BeforeMiddleware'>BeforeMiddleware</a> for <a class='struct' href='iron_hmac/struct.Hmac256Authentication.html' title='iron_hmac::Hmac256Authentication'>Hmac256Authentication</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
