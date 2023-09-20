export function validateImageUrl(url: string | undefined): string | undefined {
    if (url?.startsWith('http://') || url?.startsWith('https://')) {
        return url
    }
    return undefined
}