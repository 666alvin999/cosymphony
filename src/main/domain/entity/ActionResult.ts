export class ActionResult {

	private success: boolean;
	private errorMessage: string | null;

	public static ActionDone() {
		return new ActionResult(true, null);
	}

	public static ActionFailed(errorMessage: string) {
		return new ActionResult(false, errorMessage);
	}

	private constructor(success: boolean, errorMessage: string | null) {
		this.success = success;
		this.errorMessage = errorMessage;
	}

}