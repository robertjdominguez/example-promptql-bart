type TrainEstimate = {
  destination: string;
  minutes: string;
};

type BartDepartureResponse = {
  station?: string;
  estimates?: TrainEstimate[];
};

// Define the expected structure of the response data
type BartApiResponse = {
  root: {
    station: Array<{
      name: string;
      etd: Array<{
        destination: string;
        estimate: Array<{ minutes: string }>;
      }>;
    }>;
  };
};

/**
 * @readonly
 */
export async function getBartDepartures(stationCode: string): Promise<BartDepartureResponse> {
  const API_KEY = "MW9S-E7SL-26DU-VV8V";
  const url = `https://api.bart.gov/api/etd.aspx?cmd=etd&orig=${stationCode}&key=${API_KEY}&json=y`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Cast the response to the expected type
  const data = (await response.json()) as BartApiResponse;

  return {
    station: data?.root?.station[0]?.name,
    estimates: data?.root?.station[0]?.etd.map((train) => ({
      destination: train.destination,
      minutes: train.estimate[0]?.minutes ?? "Unknown",
    })),
  };
}
