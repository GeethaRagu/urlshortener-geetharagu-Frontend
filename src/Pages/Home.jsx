import React from 'react';

const Home = () => {
    return (
        <section className='home_container'>
           <p> URL shortening is a technique on the World Wide Web in which a Uniform
        Resource Locator (URL) may be made substantially shorter and still
        direct to the required page. This is achieved by using a redirect which
        links to the web page that has a long URL. For example, the URL
        "https://en.wikipedia.org/wiki/URL_shortening" can be shortened to
        "https://w.wiki/U". Often the redirect domain name is shorter than the
        original one. A friendly URL may be desired for messaging technologies
        that limit the number of characters in a message (for example SMS), for
        reducing the amount of typing required if the reader is copying a URL
        from a print source, for making it easier for a person to remember, or
        for the intention of a permalink. In November 2009, the shortened links
        of the URL shortening service Bitly were accessed 2.1 billion times.
        Other uses of URL shortening are to "beautify" a link, track clicks, or
        disguise the underlying address. This is because the URL shortener can
        redirect to just about any web domain, even malicious ones. So, although
        disguising of the underlying address may be desired for legitimate
        business or personal reasons, it is open to abuse.Some URL shortening
        service providers have found themselves on spam blocklists, because of
        the use of their redirect services by sites trying to bypass those very
        same blocklists. Some websites prevent short, redirected URLs from being
        posted.</p>
            <a href="/login" className='btn btn-primary'>Sign In</a>
        </section>
    );
};

export default Home;