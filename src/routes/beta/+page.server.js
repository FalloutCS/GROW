/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        user: {
            uid: 12345,
            parsedDemos: {
                map: "Ancient",
                date: "1/31/2025",
                score_T: 5,
                score_CT: 13,
                snapShots: 4,
                notes: "We kinda failed this match"
            }
        }
    };
};

/** @satisfies {import('./$types').Actions} */
export const actions = {
	default: async ({request}) => {
		// TODO log the user in
        try {
            const data = await request.formData();
            console.log(data);
        } catch (error) {
            console.log("error uploading demo");
        }
        console.log("someone wants to upload a demo")
	}
};