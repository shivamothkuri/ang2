import { DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router';

export class CustomUrlSerializer implements UrlSerializer {
    parse(url: string): UrlTree {
        // Change plus signs to encoded spaces
        url = url.replace('(', '%20');
        let dus = new DefaultUrlSerializer();
        // Use the default serializer that you can import to just do the 
        // default parsing now that you have fixed the url.
        return dus.parse(url);
    }

    serialize(tree: UrlTree): string {
    	let dus = new DefaultUrlSerializer();
    	let str = dus.serialize(tree);
    	 let newstr =  str.replace(/\(|\)|:/g, '/');
    	 return newstr;
    }
}