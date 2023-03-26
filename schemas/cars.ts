import { defineField, defineType } from "sanity"

export default defineType({
    name: "cars",
    title: "Cars",
    type: "document",
    fields: [
        defineField({
            name: "carImageName",
            title: "Car Image Name",
            type: "string",
        }),
        defineField({
            name: "carName",
            title: "Car Name",
            type: "string",
        }),
        defineField({
            name: "carModelYear",
            title: "Car Model Year",
            type: "string",
        }),
        defineField({
            name: "date",
            title: "Date",
            type: "date",
        }),
        defineField({
            name: "client",
            title: "Client",
            type: "reference",
            to: { type: "client" },
        }),
        defineField({
            name: "car",
            title: "Car",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
    ],
})
