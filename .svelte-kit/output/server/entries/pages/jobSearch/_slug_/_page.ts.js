import { j as jobService } from "../../../../chunks/jobService.js";
import { e as error } from "../../../../chunks/index.js";
const load = async ({ params }) => {
  try {
    const { getJobOpeningById } = jobService();
    const jobs = await getJobOpeningById(params.slug);
    let job = jobs[0];
    console.log("job", job);
    if (!job) {
      throw error(404, "Job not found");
    }
    return {
      job
    };
  } catch (err) {
    console.error("Error fetching job:", err);
    throw error(404, "Job not found");
  }
};
export {
  load
};
