export default interface Person {
    id: string
    name: string
    photo: string
    rank: string
    contacts?: {
        vk?: string
        telegram?: string
        twitter?: string
        instagram?: string
    }
}