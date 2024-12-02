import { j as jobService } from "../../../chunks/jobService.js";
async function load({ params }) {
  try {
    const { getCategories } = jobService();
    const [categories] = await Promise.all([
      getCategories()
    ]);
    return {
      categories
    };
  } catch (err) {
    console.log("error", err);
    return { error: "Failed To Fetch" };
  }
}
export {
  load
};
