export class Link {
    readonly name: string;
    href: string;
    constructor(readonly title: string, readonly docId: string | undefined, name?: string, relativePath?: string) {
        this.name = name ? name : title;
        this.href = '#/doc?url=' + (relativePath ? this.addFragmentToPath(relativePath, docId) : `/linkresolver/static/${docId}#${docId}`);
    }

    private addFragmentToPath(path: string, fragment: string | undefined) {
      return path.includes('#') ? path : `${path}#${fragment}`;
    }
}

export class ExternalLink extends Link {
  constructor(title: string, href: string) {
    super(title, undefined);
    this.href = href;
  }
}
