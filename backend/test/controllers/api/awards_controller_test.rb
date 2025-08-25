require "test_helper"

class Api::AwardsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_awards_index_url
    assert_response :success
  end
end
