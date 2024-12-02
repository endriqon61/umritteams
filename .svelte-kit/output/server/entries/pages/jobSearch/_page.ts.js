import { j as jobService } from "../../../chunks/jobService.js";
async function load({ params }) {
  try {
    const { getJobOpenings, getCategories } = jobService();
    const [jobs, categories] = await Promise.all([
      getJobOpenings(),
      getCategories()
    ]);
    return {
      jobs,
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
